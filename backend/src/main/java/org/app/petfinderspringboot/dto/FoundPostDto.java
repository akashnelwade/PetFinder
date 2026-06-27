package org.app.petfinderspringboot.dto;

import lombok.AllArgsConstructor;
import org.app.petfinderspringboot.entity.User;

public record FoundPostDto(
        int postID,
        String user,
        String postDescription,
        String petType,
        String breed,
        String color,
        String gender,
        String photoUrl,
        String district,
        String city,
        String landmark,
        String finderName,
        String contactNumber,
        String postDate,
        String status
) {
}