1. создаём или получаем с сервера файлы и записываем в базу (Car.js, Music.js)
2. грузим данные в общие хранилище - combineReducers (contain_reduce.js)
3. создаём в index.js --- const store = createStore(ссылка на combineReducers);
4. создаём в index.js <Provider> с атрибутом store={...} и помещаем туда созданное хранилище store
5. в App.js создаем контейнеры
  
6. -в Count.js создаём функцию <mapStateToProps> которая будет брать из хранилища свойства в свой ключ
-и функцию <mapDispatchToProps> Где импорт. метод-редакса bindActionCreators(..., dispatch) вызывает при событии 
(act_outNameCar.jsx) где хранится тип и свойство из события. Эти функции конектятся редакс-методом 
export default connect (mapStateToProps,mapDispatchToProps)(Count); что бы связатсья с хранилищем
  
7. в showList из ключа this.props.cars вызываем свойства и делаем список и вешаем onClick на li, передаем свойства item из .map в хранилище this.props.outNameCar(item)
  
8. в App.js вызываем Details  и в функции mapStateToProps с ключом CarActive из (contain_reduce.js) который ведет на (CarActive.js) где switch выбирает по type нужные данные

9. если params = null выводим что то (для начального состояния), а потом {this.props...KEY...name} берет отсортированное событие
