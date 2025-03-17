import React from "react";

export default function Nav(){
    return(
            <ul>
                <li><a href="/home" role="button">Homepage</a></li>
                <li><a href="/about" role="button">About</a></li>
                <li><a href="/blog" role="button">Menu</a></li>
                <li><a href="/reservations" role="button">Reservations</a></li>
                <li><a href="/order-online" role="button">Order Online</a></li>
                <li><a href="/login" role="button">Login</a></li>
            </ul>
    );
}