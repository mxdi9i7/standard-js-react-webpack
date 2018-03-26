
## Example response from Directline server

---

this is the initial request sent to directline when **polling**:
this request contains no information in the body and will respond with a conversation ID.

```
/v3/directline/conversations
```

this is the response from the directline containing the convesration ID
The token field is currently empty because we haven't set up auth yet.

```
{
    conversationId: "5214d9ef-ca64-4fc2-b949-d6b5fb69a545",
    expires_in: 1800,
    streamUrl: "/v3/directline/conversations/5214d9ef-ca64-4fc2-b949-d6b5fb69a545/stream",
    token: null
}
```



---
### Message types

###### this is what it looks like when we receive a *plain text* message:

```
{
  "type": "message",
  "text": "Hi there, I'm the Car Keys Bot! 🤖",
  "localTimestamp": "2018-03-16T19:10:01.431Z",
  "from": {
    "id": "jb4b56ef814b",
    "name": "Bot"
  },
  "recipient": {
    "id": "default-user",
    "name": "User"
  },
  "inputHint": "ignoringInput",
  "id": null,
  "replyToId": "8168dfijaicg"
}
```

Notice that there is only the `text` field is presented in this response, in that case, this response represents a plain text message from the bot.


###### this is what it looks like when we send a *plain text* message:

```
{
  "type": "message",
  "timestamp": "2018-093-167T21:50:10.9218",
  "textFormat": "plain",
  "text": "Show me Savings",
  "locale": "en-US",
  "from": {
    "id": "4cf1f08a-4b48-4a69-87a5-2f6ed3ac154s",
  },
  "entities": [
    {
      "type": "ClientCapabilities", 
      "requiresBotState": true, 
      "supportsTts": true
    }
  ],
  "channelData": {
    "clientActivityId": "1521237003550.032515251585919724.0"
  }
}
```

Notice that there is only the `text` field is presented in this response, in that case, this response represents a plain text message from the bot.


###### Message batch sent from directline 
if there's multiple messages coming from bot in one water mark, the messages will be grouped into an array with index:

```
{
    "activities": [
        {
          message 1...
        },
        {
          message 2...
        }
    ],
    "watermark": 2
}
```

To break down the message batch, we have a plain text and a button-based multiple choice message, we've went over the plain text message and here's a closer look at a button-based multiple choice message:

```
 {
    "type": "message",
    "attachments": [
        {
            "contentType": "application/vnd.microsoft.card.hero",
            "content": {
                "buttons": [
                    {
                        "type": "imBack",
                        "title": "Show me savings",
                        "value": "Show me savings"
                    },
                    {
                        "type": "imBack",
                        "title": "Brochure",
                        "value": "Brochure"
                    },
                    {
                        "type": "imBack",
                        "title": "Test Drive",
                        "value": "Test Drive"
                    }
                ]
            }
        }
    ],
    "text": "I can help save you money 💵 on a new car.",
    "inputHint": "expectingInput",
    "localTimestamp": "2018-03-16T19:05:11.247Z",
    "from": {
        "id": "bot"
    },
    "recipient": {
        "id": "ab12ec1d-4190-43eb-b148-0cba05c3376d"
    },
    "id": "82edbe7e-360b-417d-ae57-582fd1652ffd",
    "timestamp": "Fri Mar 16 2018 15:05:11 GMT-0400 (EDT)"
}
```

###### Thumbnail image card buttons

In this case we have a message sent back from bot that represents thumbnail cards that are wrapped in buttons.

```
{
    "activities": [
        {
            "type": "message",
            "attachments": [
                {
                    "contentType": "application/vnd.microsoft.card.thumbnail",
                    "content": {
                        "images": [
                            {
                                "url": "https://cdn.octaive.com/botchat/assets/bystyle.png"
                            }
                        ],
                        "buttons": [
                            {
                                "type": "imBack",
                                "value": "Select by style",
                                "title": "Select by style"
                            }
                        ]
                    }
                },
                {
                  ...another attachment
                }
            ],
            "text": "Now choose your car!",
            "inputHint": "expectingInput",
            "locale": "en-US",
            "localTimestamp": "2018-03-16T21:50:11.781Z",
            "from": {
                "id": "bot"
            },
            "recipient": {
                "id": "4cf1f08a-4b48-4a69-87a5-2f6ed3ac1540"
            },
            "id": "dc89e159-c506-484a-b672-373d784dc81b",
            "timestamp": "Fri Mar 16 2018 17:50:11 GMT-0400 (EDT)"
        }
    ],
    "watermark": 4
}

```


##### Hero cards that represents plain text buttons

```
{
    "activities": [
        {
            "type": "message",
            "attachments": [
                {
                    "contentType": "application/vnd.microsoft.card.hero",
                    "content": {
                        "buttons": [
                            {
                                "type": "imBack",
                                "title": "Petrol",
                                "value": "Petrol"
                            },
                            {
                                "type": "imBack",
                                "title": "Diesel",
                                "value": "Diesel"
                            }
                        ]
                    }
                }
            ],
            "text": "Now, which fuel type should I search for? ⛽",
            "inputHint": "expectingInput",
            "locale": "en-US",
            "localTimestamp": "2018-03-16T22:02:38.616Z",
            "from": {
                "id": "bot"
            },
            "recipient": {
                "id": "4cf1f08a-4b48-4a69-87a5-2f6ed3ac1540"
            },
            "id": "b5af48f4-4434-401e-9048-1583c04b7bba",
            "timestamp": "Fri Mar 16 2018 18:02:38 GMT-0400 (EDT)"
        }
    ],
    "watermark": 8
}
```

##### Prompted message

Prompted messages are plain text messages that's expecting a textual input

```
{
    "activities": [
        {
            "type": "message",
            "attachments": [
                {
                    "contentType": "application/vnd.microsoft.card.hero",
                    "content": {
                        "buttons": [
                            {
                                "type": "imBack",
                                "title": "Petrol",
                                "value": "Petrol"
                            },
                            {
                                "type": "imBack",
                                "title": "Diesel",
                                "value": "Diesel"
                            }
                        ]
                    }
                }
            ],
            "text": "Now, which fuel type should I search for? ⛽",
            "inputHint": "expectingInput",
            "locale": "en-US",
            "localTimestamp": "2018-03-16T22:02:38.616Z",
            "from": {
                "id": "bot"
            },
            "recipient": {
                "id": "4cf1f08a-4b48-4a69-87a5-2f6ed3ac1540"
            },
            "id": "b5af48f4-4434-401e-9048-1583c04b7bba",
            "timestamp": "Fri Mar 16 2018 18:02:38 GMT-0400 (EDT)"
        }
    ],
    "watermark": 8
}
```

#### More combinations of bot messages will be added in later 