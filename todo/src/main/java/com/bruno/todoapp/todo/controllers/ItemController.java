package com.bruno.todoapp.todo.controllers;

import com.bruno.todoapp.todo.entities.Item;
import com.bruno.todoapp.todo.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200"})
@RestController
public class ItemController {

    @Autowired
    private ItemService itemService;

    // Save operation
    @PostMapping("/items")
    public Item saveItem(
            @Validated @RequestBody Item item)
    {
        return itemService.saveItem(item);
    }

    // Read operation
    @GetMapping("/items")
    public List<Item> getItemList()
    {
        return itemService.getItemList();
    }
    @GetMapping("/items/{id}")
    public Item getItem(@PathVariable("id") Integer itemId) {
        return itemService.getItem(itemId);
    }

    // Update operation
    @PutMapping("/items/{id}")
    public Item
    updateItem(@RequestBody Item item,@PathVariable("id") Integer itemId)
    {
        return itemService.updateItem(item,itemId);
    }

    // Delete operation
    @DeleteMapping("/items/{id}")
    public String deleteItemById(@PathVariable("id")
                                         Integer itemId)
    {
        itemService.deleteItemById(
                itemId);
        return "Deleted Successfully";
    }
}