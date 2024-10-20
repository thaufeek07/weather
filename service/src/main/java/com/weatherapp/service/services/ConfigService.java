package com.weatherapp.service.services;

import com.weatherapp.service.model.Config;
import com.weatherapp.service.repository.configrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConfigService {
    @Autowired
    configrepository configrepository;
    public Config createConfig(Config config){
        return configrepository.save(config);
    }
}
