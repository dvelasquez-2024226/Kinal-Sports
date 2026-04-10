    import { create } from "zustand"
import { persist } from "zustand/middleware"
import { login as loginResquest } from "../../../shared/api"
import { showError } from "../../../shared/utils/toast.js" 

export const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            token : null,
            resfresToken: null,
            expiresAt: null,
            loading: false,
            error: null,
            iisLoadingAuth: true,
            isAuthenticated: false,
            //Verficar si hay sesion activa
            checkAuth: async () => {
                const token = get().token;
                const role = get().user?.role;
                const isAdmin = role === "ADMIN_ROLE";
                if(token && !isAdmin) {
                    set({
                        user: null,
                        token: null,
                        resfresToken: null,
                        expiresAt: null,
                        isAuthenticated: false,
                        iisLoadingAuth: false,
                        error: "No tienes permisos para acceder a esta aplicación"
                    })
                    return;
                }
                set({
                    iisLoadingAuth: false,
                    isAuthenticated: Boolean(token) && isAdmin
                })
            },

            logout: () => {
                set({
                    user: null,
                    token: null,
                    resfresToken: null,
                    expiresAt: null,
                    isAuthenticated: false
                })
            },

            login: async ({emailOrUsername, password}) => {
                try{
                    set({loading: true, error: null})
                    const {data} = await loginResquest({emailOrUsername, password})
                    const role = data?.user?.role;
                    if(role !== "ADMIN_ROLE"){
                        const message = "No tienes permisos para acceder a esta aplicación";
                        set({
                            user: null,
                            token: null,
                            resfresToken: null,
                            expiresAt: null,
                            isAuthenticated: false,
                            iisLoadingAuth: false,
                            error: "No tienes permisos para acceder a esta aplicación"
                        })
                        showError(message)
                        return { succes: false, error: message}
                    }
                    set({
                        user: data.userDetails,
                        token: data.accessToken,
                        resfresToken: data.resfresToken,
                        expiresAt: data.expiresAt,
                        isAuthenticated: false,
                        loading: true,
                    })
                }catch(err){
                    const message = err.response?.data?.meassage || "Error al iniciar sesión";
                    set({error: message, loading: false})
                    return {succes: false, error: message}
                }
            }
        }),
        {name: "auth-storage"},
    )
)