package com.weatherapp.service.config;

import com.weatherapp.service.controller.DataFeedController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {
    @Autowired
    DataFeedController dataFeedController;
    @Scheduled(cron = "0 * * * * *")
    public void execute() {
        dataFeedController.createData();
    }
}