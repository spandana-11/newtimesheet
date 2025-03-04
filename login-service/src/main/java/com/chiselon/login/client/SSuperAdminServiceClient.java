package com.chiselon.login.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.chiselon.login.model.SuperAdmin;
import com.chiselon.login.config.OpenFeignConfig;

@FeignClient(name = "ssuper-admin-service", url = "http://ssuper-admin-service:8089", configuration = OpenFeignConfig.class)
public interface SSuperAdminServiceClient {

    @GetMapping("/superadmins/validate")
    SuperAdmin validateSuperAdminCredentials(@RequestParam("emailId") String emailId,
                                             @RequestParam("password") String password);
}
