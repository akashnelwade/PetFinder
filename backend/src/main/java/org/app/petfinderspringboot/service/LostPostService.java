package org.app.petfinderspringboot.service;

import org.app.petfinderspringboot.dto.FilterPostsDto;
import org.app.petfinderspringboot.dto.FoundPostDto;
import org.app.petfinderspringboot.dto.LostPostDto;
import org.app.petfinderspringboot.entity.FoundPost;
import org.app.petfinderspringboot.entity.LostPost;

import java.util.List;

public interface LostPostService {
    LostPost save(LostPost lostPost);
    LostPost findPostById(int postID);
    String extractPublicIdFromCloudinary(String url);
    boolean delete(String postID);
    List<LostPostDto> getAll();
    List<LostPostDto> filterPosts(FilterPostsDto filterDto);
    List<LostPostDto> loadPostsByUser(String userName);
    boolean changeStatus(int postId, String status);
}
