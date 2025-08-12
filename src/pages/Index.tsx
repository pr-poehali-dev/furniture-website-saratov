import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-montserrat font-bold text-2xl text-primary">
              МебельДом
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="font-open-sans text-foreground hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#catalog" className="font-open-sans text-foreground hover:text-primary transition-colors">
                Каталог
              </a>
              <a href="#services" className="font-open-sans text-foreground hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#contacts" className="font-open-sans text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Герой секция */}
      <section id="hero" className="bg-gradient-to-br from-background to-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Уютная мебель
                <span className="text-primary block">для вашего дома</span>
              </h1>
              <p className="font-open-sans text-xl text-muted-foreground mb-8 leading-relaxed">
                Создаём встроенные шкафы-купе и корпусную мебель по индивидуальным размерам 
                для жителей Саратова и области. Качество, уют и функциональность в каждом изделии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-open-sans font-medium">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="font-open-sans font-medium">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/f7ae6a42-f8c8-4aea-84d1-f22bf5eefe6f.jpg" 
                alt="Встроенный шкаф-купе"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="font-montserrat font-bold text-lg">15+ лет</div>
                <div className="font-open-sans text-sm">опыта работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Ruler" size={32} className="text-accent" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Точные размеры</h3>
              <p className="font-open-sans text-muted-foreground">
                Изготавливаем мебель строго по вашим размерам с точностью до миллиметра
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-accent" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Гарантия качества</h3>
              <p className="font-open-sans text-muted-foreground">
                3 года гарантии на всю продукцию и бесплатное сервисное обслуживание
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-accent" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Быстрое изготовление</h3>
              <p className="font-open-sans text-muted-foreground">
                Изготовление и установка от 7 до 14 дней в зависимости от сложности
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог */}
      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-foreground mb-4">
              Каталог продукции
            </h2>
            <p className="font-open-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор встроенных шкафов-купе и корпусной мебели для любого интерьера
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img 
                  src="/img/f7ae6a42-f8c8-4aea-84d1-f22bf5eefe6f.jpg"
                  alt="Встроенные шкафы-купе"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat">Встроенные шкафы-купе</CardTitle>
                <CardDescription className="font-open-sans">
                  Максимально используем пространство вашей комнаты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat font-bold text-xl text-primary">
                    от 25 000 ₽
                  </span>
                  <Button size="sm">
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img 
                  src="/img/1062ab60-4fbc-434e-97a1-f21d974ad830.jpg"
                  alt="Гардеробные системы"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat">Гардеробные системы</CardTitle>
                <CardDescription className="font-open-sans">
                  Организация пространства для одежды и аксессуаров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat font-bold text-xl text-primary">
                    от 35 000 ₽
                  </span>
                  <Button size="sm">
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img 
                  src="/img/28850ae1-e600-422e-84fa-7794768373ac.jpg"
                  alt="Корпусная мебель"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat">Корпусная мебель</CardTitle>
                <CardDescription className="font-open-sans">
                  Комоды, тумбы, стеллажи и другая мебель на заказ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat font-bold text-xl text-primary">
                    от 15 000 ₽
                  </span>
                  <Button size="sm">
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="font-open-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работ: от проектирования до установки готовой мебели
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Icon name="PenTool" size={40} className="text-primary mb-4" />
              <h3 className="font-montserrat font-semibold text-lg mb-3">Проектирование</h3>
              <p className="font-open-sans text-muted-foreground text-sm">
                3D-визуализация будущей мебели с учётом всех ваших пожеланий
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Icon name="Hammer" size={40} className="text-primary mb-4" />
              <h3 className="font-montserrat font-semibold text-lg mb-3">Изготовление</h3>
              <p className="font-open-sans text-muted-foreground text-sm">
                Производство мебели на современном оборудовании из качественных материалов
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Icon name="Truck" size={40} className="text-primary mb-4" />
              <h3 className="font-montserrat font-semibold text-lg mb-3">Доставка</h3>
              <p className="font-open-sans text-muted-foreground text-sm">
                Бережная доставка по Саратову и области в удобное для вас время
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Icon name="Settings" size={40} className="text-primary mb-4" />
              <h3 className="font-montserrat font-semibold text-lg mb-3">Установка</h3>
              <p className="font-open-sans text-muted-foreground text-sm">
                Профессиональная сборка и установка с настройкой всех механизмов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-montserrat text-4xl font-bold text-foreground mb-6">
                Контакты
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Адрес</h3>
                    <p className="font-open-sans text-muted-foreground">
                      г. Саратов, ул. Московская, 45<br />
                      (работаем по всей области)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Телефон</h3>
                    <p className="font-open-sans text-muted-foreground">
                      +7 (8452) 123-456<br />
                      +7 (905) 123-45-67
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Режим работы</h3>
                    <p className="font-open-sans text-muted-foreground">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h3 className="font-montserrat text-2xl font-bold text-foreground mb-6">
                Оставить заявку
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="font-open-sans text-sm font-medium text-foreground block mb-2">
                    Ваше имя
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="font-open-sans text-sm font-medium text-foreground block mb-2">
                    Телефон
                  </label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="font-open-sans text-sm font-medium text-foreground block mb-2">
                    Сообщение
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Расскажите о ваших пожеланиях..."
                  />
                </div>
                <Button size="lg" className="w-full font-open-sans font-medium">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-montserrat font-bold text-2xl mb-4">МебельДом</div>
              <p className="font-open-sans opacity-90">
                Создаём уютные интерьеры для вашего дома с 2008 года. 
                Качественная мебель по доступным ценам.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 font-open-sans opacity-90">
                <p>г. Саратов, ул. Московская, 45</p>
                <p>+7 (8452) 123-456</p>
                <p>info@mebeldom-saratov.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">📱</span>
                </div>
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">📞</span>
                </div>
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">📧</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="font-open-sans opacity-75">
              © 2024 МебельДом. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;