package org.app.petfinderspringboot.service;

import org.app.petfinderspringboot.dto.FilterPostsDto;
import org.app.petfinderspringboot.dto.FoundPostDto;
import org.app.petfinderspringboot.entity.FoundPost;

import java.util.List;

public interface FoundPostService {
    FoundPost save(FoundPost foundPost);
    FoundPost findPostById(int postID);
    String extractPublicIdFromCloudinary(String url);
    boolean delete(String postID);
    List<FoundPostDto> getAll();
    List<FoundPostDto> filterPosts(FilterPostsDto filterDto);
    List<FoundPostDto> loadPostsByUser(String userName);
    boolean changeStatus(int status, String s);
}
