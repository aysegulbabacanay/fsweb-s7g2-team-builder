import React from "react";

function Uye(props) {

  const { kisi } = props;

  return (
    <div className="uye-kutusu beyaz-kutu">
      <h3 className="uye-isim">{kisi.name}</h3>
      <div className="uye-ozellik">
        <div className="uye-label">Takımdaki rolü</div>
        <div>{kisi.department}</div>
      </div>
      <div className="uye-ozellik">
        <div className="uye-label">Favori zaman dilimi</div>
        <div>{kisi.favoriteTime}</div>
      </div>
    </div>
  )
}

export default Uye;