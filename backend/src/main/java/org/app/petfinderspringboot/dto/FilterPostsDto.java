package org.app.petfinderspringboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FilterPostsDto {
    private String petType;
    private String status;
    private String district;
    private String city;
}
