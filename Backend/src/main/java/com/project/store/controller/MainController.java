package com.project.store.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/administrative")
    public String accessMain() {
        return "administrative/home";
    }
}