package com.chiselon.login.client;

import com.chiselon.login.config.OpenFeignConfig;
import com.chiselon.login.model.Admin;
import com.chiselon.login.model.Employee;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "superadmin-service", url = "http://superadmin-service:8080", configuration = OpenFeignConfig.class)
public interface SuperAdminServiceClient {

	 @GetMapping("/admins/validate")
	    Admin validateAdminCredentials(@RequestParam("emailId") String emailId,
	                                     @RequestParam("password") String password);
}
