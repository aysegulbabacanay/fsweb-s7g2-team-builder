import React from "react";
import { useState } from "react";


// sabit kalmasını istediğimiz değişkenleri state de tutuyoruz. ortak bir state oluşturuyoruz. her zaman name e göre yapıyoruz,en önemlisi name.
function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    department: "Designer", 
    favoriteTime: "",
  });
//ilk başta designer yazacak şekilde gelsin istedik.

// başta aşağısı yok.
  const { formSubmitCalistir, varOlanUyeler } = props;

  const handleFormChange = (e) => {
    console.log(e.target.value);
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
       //her zaman name diyoruz.
     });
     //yukardaki yazılan kısım seçimleri tutmamızı sağlıyor.
  };

  return (
    <div>
      <form
        style={{
          backgroundColor: "#DBE8D8",
          margin: "0 auto",
          padding: "10px",
        }}

        // başta aşağısı yok.Bunu ekleyince submit deyince yeni bir takım üyesi ekleyebiliyorsun.sen önden submit etme ve sayfa yenilenmesin istiyoruz.
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          formSubmitCalistir([...varOlanUyeler, formData]);
          //console.log(formData);
        }}
      >
        <p>
          <label htmlFor="name">Name: </label> 
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name} // 
            onChange={handleFormChange}
          />
        </p>

        <p>
          <label htmlFor="department">Takımdaki Rolü: </label>
          <select
            id="department"
            name="department"
            onChange={handleFormChange}
            value={formData.department}
          >
            <option value="Designer">Designer</option> 
            <option value="Developer">Developer</option>
          </select>
        </p>
        <p>
          <label>Favori Zaman Dilimi: </label>
          {/* label htmlFor ile yapmassak id vermek zorunda değiliz. <label> <input type="radio" name="favoriteTime" value="Gece"/> Gece</label>" bu şekilde de yazabilirdik*/} 
          <label htmlFor="favoriteTime">Gece </label> 
          <input
            type="radio"
            id="favoriteTime"
            name="favoriteTime"
            value="Gece"  //birden fazla seçenek olduğu için value veriyoruz.
            checked={formData.favoriteTime === "Gece"} //yine raidolarda birden fazla seçenek olduğu için böyle bir kontrol grekiyor.
            onChange={handleFormChange}
          />
          <label htmlFor="favoriteTime">Gündüz</label>
          <input
            type="radio"
            id="favoriteTime"
            name="favoriteTime"
            value="Gündüz"
            checked={formData.favoriteTime === "Gündüz"}
            onChange={handleFormChange}
          />
        </p>
        <p>
          <input type="submit" value={"Submit"} />
        </p>
      </form>
    </div>
  );
}

export default Form;