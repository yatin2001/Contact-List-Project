'use strict';

class Contact {
    constructor(name, number, avatar, email) {
        this.contactAvatar = avatar.search('.jpg')!=-1||avatar.search('.png')!=-1||"https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
        this.contactName = name||"defaults";
        this.contactNumber = number;
        this.contactEmail = email;
    }
}
module.exports = Contact;