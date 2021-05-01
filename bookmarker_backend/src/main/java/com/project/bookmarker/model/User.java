package com.project.bookmarker.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String username;
	private String name;
	private String password;
	private boolean dark;
	private String bookmarks;
}
