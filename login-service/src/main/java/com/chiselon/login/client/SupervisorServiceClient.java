package com.chiselon.login.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.chiselon.login.config.OpenFeignConfig;
import com.chiselon.login.model.Supervisor;

@FeignClient(name = "Supervisor", url = "http://Supervisor:8086", configuration = OpenFeignConfig.class)
public interface SupervisorServiceClient {

    @GetMapping("/supervisors/validate")
    Supervisor validateSupervisorCredentials(@RequestParam("emailId") String emailId, 
                                             @RequestParam("password") String password);
}
