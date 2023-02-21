//senaryo 1
class Product {
  id: number;
  name: string;
  title: string;
  price: number;
}
class ProductDto {
  name: string;
  title: string;
  price: number;
}

const productList: Product[] = [];
class complexDal {
  add(t: ProductDto) {
    let productEntity = new Product();
    productEntity.name = t.name;
    productEntity.price = t.price;
    productEntity.title = t.title;

    //business logic codes

    console.log("productentity db kaydedildi");
  }
  getbyId(id: number) {
    const productEntity = productList.find((x) => x.id == id);
    let productDto = new ProductDto();
    productDto.name = productEntity?.name as string;
    productDto.price = productEntity?.price as number;
    productDto.title = productEntity?.title as string;
    //business logic codes
    return productDto;
  }
}

//görüldüğü üzere complexDal classındaki metotlar hem dbye erişimleri var hemde business logic işlemler yapılıyor bu doğru bir yaklaşım değil
//bir class ya db ile alakalı işlemleri yapmak için kullanılmalı yada business logic kodları yürütmeli
//repository ve service iki katman oluşturucaz repository db ile alakalı işlemleri yapıcak
//service katmanı daldan entity alıp diğer librarylere /apilere dto nesnesi dönmekle ve business logic kodlarının yürütmekle görevli olacak

class Repository {
  add(t: Product) {
    console.log("kaydedildi");
  }

  getbyId(id: number) {
    const productEntity = productList.find((x) => x.id == id);
    return productEntity;
  }
}

class Service {
  add(t: ProductDto) {
    let repository = new Repository();
    let productEntity = new Product();
    productEntity.name = t.name;
    productEntity.price = t.price;
    productEntity.title = t.title;
    //business logic codelar
    //ardından dto nesnesinin entity nesnesine maplenmesi işlemi ardından repository add metodunun çağrılması
    repository.add(productEntity);
  }
  getById(id: number) {
    let repository = new Repository();
    let entity = repository.getbyId(id);
    let dto = new ProductDto();
    dto.name = entity?.name as string;
    dto.price = entity?.price as number;
    dto.title = entity?.title as string;
    return dto;
  }
}
