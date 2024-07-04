import React from "react";

export default function Card({ username, btnText }) {
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img
        class="w-24 h-24 rounded-full mx-auto"
        src="https://images.pexels.com/photos/25811340/pexels-photo-25811340/free-photo-of-a-close-up-of-green-leaves-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 text-center space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">{username}</div>
          <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia {btnText}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
