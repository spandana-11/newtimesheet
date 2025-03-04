package com.timesheet.employee.entity;

import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity
@Table(name = "archive_employee")
public class ArchiveEmployee {

	    @Id
	    private String employeeId;

	    @NotBlank(message = "First name must not be blank")
	    private String firstName;

	    @NotBlank(message = "Last name must not be blank")
	    private String lastName;

	    @NotBlank(message = "Address must not be blank")
	    private String address;

	    @NotNull(message = "Mobile number must not be null")
	    private Long mobileNumber;

	    @NotBlank(message = "Email ID must not be blank")
	    @Pattern(regexp = ".*@gmail\\.com$", message = "Email address must end with @gmail.com")
	    private String emailId;

	    @NotBlank(message = "Password must not be blank")
	    private String password;

	    @NotNull(message = "Aadhar number must not be null")
	    private Long aadharNumber;

	    @NotBlank(message = "PAN number must not be blank")
	    private String panNumber;

	    private String supervisor; // Nullable

	    private String supervisorId;

	    private List<String> projects;
}
