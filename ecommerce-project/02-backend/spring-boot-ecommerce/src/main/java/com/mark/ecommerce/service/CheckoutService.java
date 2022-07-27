package com.mark.ecommerce.service;

import com.mark.ecommerce.dto.Purchase;
import com.mark.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
