import React from "react";
import { HeroText } from "/public/imgs/hero_text.jsx";
import hero from "/public/imgs/hero.png";
import { Button } from "../../components/ui/button";
import { cardData } from "../../data/data";
import { Purchase } from "/public/icons/purchase.jsx";
import iphone from "/public/imgs/iphone14.png";
import { Advantage } from "../../components/advantage";
export const Home = () => {
  return (
    <>
      <section className="bg-hero_bg">
        <div className="container relative flex pt-[120px] pb-[104px] pl-[566px] mb-[24px]">
          <img className="absolute left-[108px]" src={hero} alt="img" />
          <div>
            <div className="mb-[40px]">
              <HeroText />
            </div>
            <div className="flex items-end mb-[17px]">
              <span className="text-hero_text text-3xl">от</span>
              <p className="text-hero_text text-5xl">137 900 ₽</p>
            </div>
            <Button variant={"primary"}>подробнее</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container pb-[72px]">
          <h2 className="text-center mb-[41px]  text-5xl">
            купить iPhone в Москве
          </h2>

          <a className="text-2xl text-primary mb-[20px]" href="/">
            Самое популярное
          </a>
          <ul className="w-[1200px] pt-[20px] gap-6 grid grid-cols-4">
            {cardData.map((item) => (
              <li key={item.id} className="w-[282px] px-[8px] shadow-md rounded-lg py-[20px] shadow-shadow">
                <h3 className="text-2xl font-medium text-center mb-[9px]">
                  {item.name}
                </h3>
                <div className="mb-4">
                  <img src={item.img} alt="img" />
                </div>
                <p className="text-sm block text-center font-medium text-dark_gray">
                  {item.text}
                </p>
                <div className="flex items-end justify-center gap-4 mb-[10px]">
                  <p className="text-dark_gray text-xl line-through">
                    {item.oldCost}
                  </p>
                  <p className="text-3xl font-medium">{item.newCost}</p>
                </div>
                <Button icon={<Purchase />} variant={"card"}>
                  в корзине
                </Button>
                <div className="flex justify-between">
                  <p className="text-base text-primary">{item.subText}</p>
                  <p className="text-base text-dark_gray">{item.subText2}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="container pr-[300px] mb-[32px]">
          <h2 className="text-3xl font-bold mb-[22px]">
            Новые модели Айфонов по выгодным ценам
          </h2>
          <p className="text-sm text-dark_gray">
            Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru
            предлагает: Низкие цены на все виды устройств, недорогие аксессуары;
            Оригинальные подарки бренда; Новая линейка смартфонов и проверенные
            старые модели; Лаконичный дизайн, большой выбор цветов и оттенков;
            Все товары в каталоге есть в наличии и доступны для покупки в кредит
            и рассрочку; Быстрая доставка по Санкт-Петербургу и области;
            Гарантия на все модели телефонов; Все способы оплаты! Товары,
            представленные на официальном сайте Istoreapple.ru, сертифицированы.
            Мы занимаемся продажей айфонов с 2013 года. Вы всегда можете
            прочитать отзывы о покупке наших клиентов, позвонить в магазин и
            получить консультацию по любой модели Apple.
          </p>
        </div>
      </section>
      <section>
        <div className="bg-black relative  py-[84px] flex  pl-[584px]">
          <img
            className="absolute w-[246px] h-[300px] left-[250px] bottom-0"
            src={iphone}
            alt="img"
          />

          <div className="container ">
            <h2 className="text-5xl mb-16px text-white">iPhone 14 Pro Max</h2>
            <p className="text-xl text-white mb-[20px]">
              по лучшей цене в Москве
            </p>
            <Button variant={"primary"}>подробнее</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container pr-[300px] pt-[32px] mb-[32px]">
          <h2 className="text-3xl font-bold mb-[22px]">
            Новые модели Айфонов по выгодным ценам
          </h2>
          <p className="text-sm text-dark_gray">
            Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru
            предлагает: Низкие цены на все виды устройств, недорогие аксессуары;
            Оригинальные подарки бренда; Новая линейка смартфонов и проверенные
            старые модели; Лаконичный дизайн, большой выбор цветов и оттенков;
            Все товары в каталоге есть в наличии и доступны для покупки в кредит
            и рассрочку; Быстрая доставка по Санкт-Петербургу и области;
            Гарантия на все модели телефонов; Все способы оплаты! Товары,
            представленные на официальном сайте Istoreapple.ru, сертифицированы.
            Мы занимаемся продажей айфонов с 2013 года. Вы всегда можете
            прочитать отзывы о покупке наших клиентов, позвонить в магазин и
            получить консультацию по любой модели Apple.
          </p>
        </div>
      </section>
      <section>
        <div className="container pb-[72px]">
          <a className="text-2xl text-primary mb-[20px]" href="/">
            Новинки
          </a>
          <ul className="w-[1200px] pt-[20px] gap-6 grid grid-cols-4">
            {cardData.map((item) => (
              <li key={item.id} className="w-[282px] px-[8px] shadow-md rounded-lg py-[20px] shadow-shadow">
                <h3 className="text-2xl font-medium text-center mb-[9px]">
                  {item.name}
                </h3>
                <div className="mb-4">
                  <img src={item.img} alt="img" />
                </div>
                <p className="text-sm block text-center font-medium text-dark_gray">
                  {item.text}
                </p>
                <div className="flex items-end justify-center gap-4 mb-[10px]">
                  <p className="text-dark_gray text-xl line-through">
                    {item.oldCost}
                  </p>
                  <p className="text-3xl font-medium">{item.newCost}</p>
                </div>
                <Button icon={<Purchase />} variant={"card"}>
                  в корзине
                </Button>
                <div className="flex justify-between">
                  <p className="text-base text-primary">{item.subText}</p>
                  <p className="text-base text-dark_gray">{item.subText2}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="text-3xl text-center font-bold mb-[20px]">Наши преимущества</h2>
          <Advantage/>
        </div>
      </section>
    </>
  );
};
