using System;
using System.ComponentModel.DataAnnotations;

namespace AuthService.Domain.Entities;

public class User
{
    [Key]
    [MaxLength(16)]
    public string Id {get; set;} = string.Empty;

    [Required(ErrorMessage = "El nombre es obligatorio")]
    [MaxLength(25,ErrorMessage = "El nombre no debe tener mas de 25 caracteres")]
    public string Name {get; set;} = string.Empty;

    [Required(ErrorMessage = "El apellido es obligatorio")]
    [MaxLength(25,ErrorMessage = "El apellido no debe tener mas de 25 caracteres")]
    public string Surename {get; set;} = string.Empty;

    [Required(ErrorMessage = "El username es obligatorio")]
    [MaxLength(25,ErrorMessage = "El username no debe tener mas de 25 caracteres")]
    public string Username {get; set;} = string.Empty;

    [Required(ErrorMessage = "El email es obligatorio")]
    [MaxLength(150,ErrorMessage = "El email no debe tener mas de 150 caracteres")]
    [EmailAddress(ErrorMessage = "El formato de email no es valido")]
    public string Email {get; set;} = string.Empty;

    [Required(ErrorMessage = "La contrasena es obligatorio")]
    [MaxLength(50,ErrorMessage = "La contrasena no debe tener mas de 50 caracteres")]
    [MinLength(8,ErrorMessage = "La contrasena no debe de tener menos de 8 caracteres")]
    public string Password {get; set;} = string.Empty;

    public bool Status {get; set;} = false;

    public DateTime CreatedAt {get; set;} = DateTime.UtcNow;

    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;

    public UserProfile UserProfile {get; set;} = null!;

    public ICollection<UserRole> UserRoles {get; set;} = [];

    public UserEmail UserEmail {get; set;} = null!;

    public UserPasswordReset UserPasswordReset {get; set;} = null!;
}
