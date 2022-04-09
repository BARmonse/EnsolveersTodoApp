package com.bruno.todoapp.todo.controllers;

import com.bruno.todoapp.todo.entities.Folder;
import com.bruno.todoapp.todo.services.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class FolderController {
    @Autowired
    private FolderService folderService;

    // Save a Folder
    @PostMapping("/folders")
    public Folder saveFolder(@Validated @RequestBody Folder folder) {
        return folderService.saveFolder(folder);
    }

    // Get all folders
    @GetMapping("/folders")
    public List<Folder> getFolderList() {
        return folderService.getFolderList();
    }

    //Get a specific folder
    @GetMapping("/folders/{id}")
    public Folder getFolder(@PathVariable("id") Integer folderId) {
        return folderService.getFolder(folderId);
    }

    //Delete a folder
    @DeleteMapping("/folders/{id}")
    public String deleteFolderById(@PathVariable("id") Integer folderId) {
        folderService.deleteFolder(folderId);
        return "Deleted Successfully";
    }
}
