package org.app.petfinderspringboot.service;


import org.app.petfinderspringboot.controller.AuthenticationController;
import org.app.petfinderspringboot.dto.response.ApiResponseDto;
import org.app.petfinderspringboot.entity.User;

import java.util.Map;

public interface AuthenticationService {
    User saveUser(User user);
    Map<String, String> loginUser(User user);
    User findById(String i);
    ApiResponseDto refreshToken(AuthenticationController.RefreshRequest request);
}
