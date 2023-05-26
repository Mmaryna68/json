//
document.addEventListener("DOMContentLoaded", function () {
  const heroes = [
    {
      name: "Бетмен",
      universe: "DC Comics",
      alterego: "Брюс Уэйн",
      occupation: "борец с преступностью, филантроп, миллиардер",
      friends: "Робин, Бэтгерл",
      superpowers:
        "интеллект, обширные познания, знания боевых искусств, ловкость",
      url: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
      info: "По популярности .",
    },
    {
      name: "Супермен",
      universe: "DC Comics",
      alterego: "Кларк Кент",
      occupation: "борец за справедливость",
      friends: "собака Крипто",
      superpowers:
        "непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм",
      url: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
      info: "Полная .",
    },
    {
      name: "Железный человек",
      universe: "Marvel Comics",
      alterego: "Тони Старк",
      occupation: "гений, миллиардер, плейбой, филантроп",
      friends: "Мстители",
      superpowers:
        "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
      url: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
      info: "Пожалуй, самый .",
    },
    {
      name: "Спайдер-мен/Человек-паук",
      universe: "Marvel Comics",
      alterego: "Питер Паркер",
      occupation: "борец за справедливость, студент, фотограф",
      friends: "Мстители, Фантастическая четверка, Люди Икс",
      superpowers:
        "сверхчеловеческие рефлексы, «паучье чутьё», способность прилепляться к твердым поверхностям, производство паутины",
      url: "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
      info: "Человек-паук . ",
    },
    {
      name: "Капитан Америка",
      universe: "Marvel Comics",
      alterego: "Стивен Роджерс",
      occupation: "супер-солдат",
      friends: "Мстители",
      superpowers:
        "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
      url: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
      info: "Капитан Америка — :)",
    },
    {
      name: "Тор",
      universe: "Marvel Comics",
      alterego: "нет; полное имя — Тор Одинсон",
      occupation: "борец за справедливость, скандинавский бог",
      friends: "Мстители",
      superpowers: "всё, что может бог, плюс молот Мьелнир",
      url: "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
      info: "Персонаж Тора . ",
    },
    {
      name: "Халк",
      universe: "Marvel Comics",
      alterego: "Брюс Беннер",
      occupation: "супергерой, борец за справедливость, ученый-биохимик",
      friends: "Мстители",
      superpowers: "сверхчеловеческая сила и скорость, выносливость, полёт",
      url: "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
      info: "Идею создания Халка .",
    },
    {
      name: "Чудо-женщина",
      universe: "DC Comics",
      alterego: "Диана Принс",
      occupation: "супергероиня, секретарь-референт",
      friends: "Лига Справедливости, Бэтмен, Супермен",
      superpowers: "сверхчеловеческая сила искорость, выносливость, полёт",
      url: "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
      info: "Пора бы  :)",
    },
    {
      name: "Черная вдова",
      universe: "Marvel Comics",
      alterego: "Наташа Романофф",
      occupation: "супергероиня, шпионка",
      friends: "Мстители",
      superpowers:
        "пик человеческого физического потенциала, замедленное старение, знание многих языков",
      url: "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
      info: "Супергероиня  :) ",
    },
    {
      name: "Дэдпул",
      universe: "Marvel Comics",
      alterego: "Уэйд Уинстон Уилсон",
      occupation: "антигерой, наёмник",
      friends: "частично Мстители, Человек-паук, Росомаха",
      superpowers:
        "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
      url: "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg",
      info: "Как и Росомаха",
    },
  ];

  // Function to create a hero card
  function createHeroCard(hero) {
    // Create the card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the hero name
    const name = document.createElement("h2");
    name.textContent = hero.name;
    card.appendChild(name);

    // Create the hero image
    const image = document.createElement("img");
    image.src = hero.url;
    image.alt = hero.name;
    card.appendChild(image);

    // Create the hero universe
    const universe = document.createElement("p");
    universe.textContent = "Universe: " + hero.universe;
    card.appendChild(universe);

    // Create the hero alter ego
    const alterEgo = document.createElement("p");
    alterEgo.textContent = "Alter Ego: " + hero.alterego;
    card.appendChild(alterEgo);

    // Create the hero occupation
    const occupation = document.createElement("p");
    occupation.textContent = "Occupation: " + hero.occupation;
    card.appendChild(occupation);

    // Create the hero friends
    const friends = document.createElement("p");
    friends.textContent = "Friends: " + hero.friends;
    card.appendChild(friends);

    // Create the hero superpowers
    const superpowers = document.createElement("p");
    superpowers.textContent = "Superpowers: " + hero.superpowers;
    card.appendChild(superpowers);

    // Cоздаем секцию для рейтинга
    const rating = document.createElement("div");
    rating.classList.add("rating");

    // Cоздаем звездные иконки
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.classList.add("star");
      star.dataset.rating = i;
      star.textContent = "★";
      rating.appendChild(star);
    }

    // Cоздаем рейтинг value элемент для оценки
    const ratingValue = document.createElement("span");
    ratingValue.classList.add("rating-value");
    ratingValue.textContent = "Оцените героя: ";
    card.appendChild(ratingValue);

    // Append the rating section to the card
    card.appendChild(rating);

    // Cоздаем секцию информация hero info, которая появляется при наведении мыши
    const info = document.createElement("p");
    info.classList.add("info");
    info.textContent = "Info: " + hero.info;
    card.appendChild(info);

    // Создаем взрывающуюся кнопку
    const button = document.createElement("div");
    button.classList.add("button");
    button.textContent = "CLICK";
    card.appendChild(button);

    return card;
  }

  //  Функция для обработки клика на звезду рейтинга
  function handleStarRating(event) {
    const clickedStar = event.target;
    const card = clickedStar.closest(".card");
    const stars = card.querySelectorAll(".star");
    const rating = Array.from(stars).indexOf(clickedStar) + 1;

    // Переключение класса 'orange' для кликнутой и предшествующих звезд
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("orange");
      } else {
        star.classList.remove("orange");
      }
    });

    // Отображение значения рейтинга
    const ratingValue = card.querySelector(".rating-value");
    ratingValue.textContent = rating;

    // Сохранение рейтинга в localStorage, используя ID карточки
    const cardId = card.id;
    localStorage.setItem(cardId, rating);
  }

  //Oтображениe информации "info" при наведении на карточку героя:
  function showInfo(event) {
    const card = event.target.closest(".card");
    const info = card.querySelector(".info");
    info.style.display = "block";
  }

  //Cкрытиe информации "info" при отведении курсора:
  function hideInfo(event) {
    const card = event.target.closest(".card");
    const info = card.querySelector(".info");
    info.style.display = "none";
  }

  // Загрузить карточки героев hero cards
  function loadHeroCards() {
    const gallery = document.getElementById("gallery");
    heroes.forEach((hero, index) => {
      // Создать уникальный ID для каждой карточки hero card
      const id = "hero" + index;

      // Создать карточки героев
      const card = createHeroCard(hero);
      card.id = id;

      // Добавление обработчиков событий клика для звезд
      const stars = document.querySelectorAll(".star");
      stars.forEach((star) => {
        star.addEventListener("click", handleStarRating);
      });

      // Загрузить рейтинг из localStorage
      const savedRating = localStorage.getItem(id);
      if (savedRating) {
        const rating = parseInt(savedRating);

        // Обновить цвета звезд, базирующиеся на сохраненном рейтинге
        stars.forEach((star, index) => {
          if (index < rating) {
            star.classList.add("orange");
          } else {
            star.classList.remove("orange");
          }
        });
      }

      // Добавление обработчиков событий для показа и скрытия информации
      card.addEventListener("mouseover", showInfo);
      card.addEventListener("mouseout", hideInfo);

      // Добавить карточки героев в галерею
      gallery.appendChild(card);
    });
  }

  // загрузить карточки героев
  loadHeroCards();
});
