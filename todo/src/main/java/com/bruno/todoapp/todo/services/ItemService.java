package com.bruno.todoapp.todo.services;

import com.bruno.todoapp.todo.entities.Folder;
import com.bruno.todoapp.todo.entities.Item;
import com.bruno.todoapp.todo.repositories.FolderRepository;
import com.bruno.todoapp.todo.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private FolderRepository folderRepository;

    // Save item
    public Item saveItem(Item item) {
        Optional<Folder> folderOptional = folderRepository.findById(item.getFolderId());
        Folder folder = folderOptional.get();
        item.setFolder(folder);
        return itemRepository.save(item);
    }

    // Read item
    public List<Item> getItemList() {
        return itemRepository.findAll();
    }
    public Item getItem(Integer itemId) {
        return itemRepository.findById(itemId).orElseThrow(RuntimeException::new);
    }

    // Update item
    public Item updateItem(Item item,Integer itemId) {
        Item existingItem = itemRepository.findById(itemId).orElse(null);
        existingItem.setDescription(item.getDescription());
        existingItem.setCompleted(item.getCompleted());
        return itemRepository.save(existingItem);
    }

    // Delete item
    public String deleteItemById(Integer itemId) {
        itemRepository.deleteById(itemId);
        return "Item removed " + itemId;
    }
}