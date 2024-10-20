package com.weatherapp.service.controller;
import com.weatherapp.service.config.AppConfig;
import com.weatherapp.service.model.Data;
import com.weatherapp.service.services.DataService;
import netscape.javascript.JSObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
@RestController
@RequestMapping("/data")
public class DataFeedController {
    @Autowired
    DataService dataService;
    @Autowired
    AppConfig appConfig;
    @Value("${other.api.base-url}")
    private String otherApiBaseUrl;
    @PostMapping("/feed")
    @ResponseStatus(value= HttpStatus.CREATED)
    public void createData(){
        Data data;
String URL="";
        RestTemplate restTemplate = new RestTemplate();
        data = new Data();
        data.setName("simple task");
        dataService.createData(data);
    }
}
