package com.project.store.controller;

import com.project.store.models.State;
import com.project.store.repositories.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class StateController {
    @Autowired
    private StateRepository stateRepository;

    @GetMapping("/registerState")
    public ModelAndView register(State state) {
        ModelAndView mv = new ModelAndView("administrative/states/register");
        mv.addObject("state", state);
        return mv;
    }

    @PostMapping("saveState")
    public ModelAndView save(State state, BindingResult result) {
        if (result.hasErrors()) {
            return register(state);
        }

        stateRepository.saveAndFlush(state);
        return register(new State());
    }
}
