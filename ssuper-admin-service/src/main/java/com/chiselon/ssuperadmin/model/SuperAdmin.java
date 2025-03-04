package com.chiselon.ssuperadmin.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity
@Table(name = "super_admin")
public class SuperAdmin {

    @Id
    private String superAdminId;

    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @NotBlank(message = "Address is required")
    private String address;

    @NotNull(message = "Mobile number is required")
    private Long mobileNumber;

    @NotBlank(message = "Email ID is required")
    @Email(regexp = "^[a-zA-Z0-9._%+-]+@gmail\\.com$", message = "Email address must be valid and end with @gmail.com")
    private String emailId;

    @NotNull(message = "Aadhar number is required")
    private Long aadharNumber;

    @NotBlank(message = "PAN number is required")
    @Pattern(regexp = "^[A-Z]{5}[A-Z0-9]{4}[A-Z]{1}$", message = "PAN card number must be of format: BEJPC8665H")
    private String panNumber;

    @NotBlank(message = "Password is required")
    private String password;
}
