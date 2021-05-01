package com.project.bookmarker.model;

import java.util.Date;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Bookmarks")
@Setter
@Getter
public class Bookmark {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String url;
	private Date saved;
	private Date recent;
	private boolean generic;
	private String img;
}
