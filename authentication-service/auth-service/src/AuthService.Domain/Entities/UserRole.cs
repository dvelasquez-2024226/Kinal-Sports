using System;
using System.ComponentModel.DataAnnotations;

namespace AuthService.Domain.Entities;

public class UserRole //Esta es la tabla pivote
{
    [Key]
    [MaxLength(16)]
    public string Id {get; set;} = string.Empty;

    [Required]
    [MaxLength(16)]
    public string UserId {get; set;} = string.Empty;

    [Required]
    [MaxLength(16)]
    public string RoleId {get; set;} = string.Empty;

    public DateTime CreatedAt {get; set;}

    public DateTime UpdatedAt {get; set;}

    public User User {get; set;} = null!; //La relacion con la tabla user

    public Role Role {get; set;} = null!; //La relacion con la tabla role
}
