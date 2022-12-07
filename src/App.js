import React, { useState } from "react";
import './App.css';
import Uye from "./Uye"
import Form from "./Form";

const takimUyeleri = [
  {
    name: "ömer tanrıverdi", // input
    department: "Designer", // developer, designer, tester dropdown
    favoriteTime: "Gece", // gece, gündüz radio
  },
  {
    name: "emre şahiner", // input
    department: "Developer", // developer, designer, tester dropdown
    favoriteTime: "Gündüz", // gece, gündüz radio
  },
];

function App() {
  const [uyeler, setUyeler] = useState(takimUyeleri);

  return (
    <div className="App">
      {/* takım üyelerim listesi */}
      <div className="icerik-kutusu">

        <div className="uyeler-kutusu">

          <h2 className="uyeler-baslik">Takım Üyeleri</h2>


          <div className="uyeler-listesi">
            {uyeler.map((herbiri, index) => <Uye key={index} kisi={herbiri} />)}
          </div>
        </div>

        <div className="yeniUye-kutusu">
          <h2 className="yeniUye-baslik">Yeni Takım üyesi ekle</h2>
          <div className="form-kutusu beyaz-kutu">
          {/* form buraya gelecek */}
          <Form formSubmitCalistir={setUyeler} varOlanUyeler={uyeler} />
            
          </div>
        </div>
      </div>

      {/* yeni üye ekleme formu */}
    </div>
  );
}

export default App;