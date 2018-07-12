package com.arkizh.garden.management.front.view;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/view")
public class ViewController {

    @RequestMapping(value = "/login")
    public String login(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return "mainpage";
    }

}
