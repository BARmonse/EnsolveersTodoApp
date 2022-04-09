package com.bruno.todoapp.todo.services;

import com.bruno.todoapp.todo.entities.Folder;
import com.bruno.todoapp.todo.entities.Item;
import com.bruno.todoapp.todo.repositories.FolderRepository;
import com.bruno.todoapp.todo.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FolderService {
    @Autowired
    private FolderRepository folderRepository;
    @Autowired
    private ItemRepository itemRepository;

    public Folder saveFolder(Folder folder)
    {
        return folderRepository.save(folder);
    }

    public List<Folder> getFolderList() {
        return folderRepository.findAll();
    }

    public Folder getFolder(Integer folderId) {
        return folderRepository.findById(folderId).orElseThrow(RuntimeException::new);
    }
    public String deleteFolder(Integer folderId) {
        List<Item>  items = itemRepository.findAll();
        for (Item item : items) {
            if (item.getFolderId() == folderId) {
                itemRepository.deleteById(item.getId());
            }
        }
        folderRepository.deleteById(folderId);
        return "Folder deleted " + folderId;
    }
}
