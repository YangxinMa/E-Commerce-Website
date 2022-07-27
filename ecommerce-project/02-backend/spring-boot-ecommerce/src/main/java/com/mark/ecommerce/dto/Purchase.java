package com.mark.ecommerce.dto;

import com.mark.ecommerce.entity.Address;
import com.mark.ecommerce.entity.Customer;
import com.mark.ecommerce.entity.Order;
import com.mark.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
