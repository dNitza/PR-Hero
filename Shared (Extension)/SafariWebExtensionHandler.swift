//
//  SafariWebExtensionHandler.swift
//  Shared (Extension)
//
//  Created by Daniel Nitsikopoulos on 10/10/2022.
//

import SafariServices
import os.log

let SFExtensionMessageKey = "message"

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
    }

}
