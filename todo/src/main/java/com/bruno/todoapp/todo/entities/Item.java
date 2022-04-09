package com.bruno.todoapp.todo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "item")
@JsonIgnoreProperties("hibernateLazyInitializer")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Integer id;

    @Column(name="description")
    private String description;

    @Column(name = "completed")
    private Boolean completed;


    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
    @JoinColumn(name = "folder_id",nullable = false)
    private Folder folder;

    @Column(name = "id")
    private Integer folderId;

    public Item(Integer id, String description, Boolean completed, Folder folder) {
        this.id = id;
        this.description = description;
        this.completed = completed;
        this.folder = folder;
    }

    public Item() {

    }

    public Integer getFolderId() {
        return folderId;
    }

    public void setFolderId(Integer folderId) {
        this.folderId = folderId;
    }

    public Folder getFolder() {
        return folder;
    }

    public void setFolder(Folder folder) {
        this.folder = folder;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
