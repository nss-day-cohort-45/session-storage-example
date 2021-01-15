# Session Storage Example

## Notes on Session Storage

1. What is session storage?

    * a container inside the web browser (chrome, firefox, edge, safari)
    * use javascript to set stuff in the container and to get stuff from the container and to remove stuff from the container
    * what is this "stuff"?
      * key / value pairs
      * both key and value are Strings
        * might have to use `parseInt()` to convert to a number
    * Often used to store information about the logged-in user
    * More permanent than javascript variables
      * survives across page refreshes

1. Why is it called "session" storage?

    * it's storage that lives throughout the lifetime of the session
    * after the session ends, it goes away

1. What Is as "session"?

    * one person's single interaction with a web app
    * It begins when you go to the website
      * type in the URL
      * or, click a link
    * It ends when you close the tab

1. Local storage

    * like session storage except data lasts longs
    * doesn't get cleared when the session ends
