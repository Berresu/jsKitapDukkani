let rowlingKitaplari=["Harry Potter ve Felsefe Taşı","25","Harry Potter ve Sırlar Odası","30","Harry Potter ve Azkaban Tutsağı","33","Harry Potter ve Ateş Kadehi","51","Harry Potter ve Zümrüdüanka Yoldaşlığı","55","Harry Potter ve Melez Prens","44","Harry Potter ve Ölüm Yadigarları","48","Harry Potter ve Lanetli Çocuk","32","Ozan Beedle'ın Hikayeleri","48","Çağlar Boyu Quidditch","33","Fantastik Canavarlar Nelerdir Nerede Bulunurlar?","39","Fantastik Canavarlar Nelerdir Nerede Bulunurlar? Orjinal Seneryo","29","Fantastik Canavarlar:Grindelwald'ın Suçları Orjinal Seneryo","28","Ickabog","24","Boş Koltuk","10","Güzel Bir Hayat","19"];
let verdonKitaplari=["Aklından bir Sayı Tut","45","Gözlerini Sımsıkı Kapat","45","Şeytanı Uyandırma","45","Peter Pan Ölmeli","45","Fırtınada Yanacaksın","45","Kurt Gölü","45","Tepenin Laneti","45"];
let riordanKitaplari=["Percy Jackson ve Olimposlular Şimşek Hırsızı","26","percy Jackson ve Olimposlular Canavarlar Denizi","30","Percy Jackson ve Olimposlular Titan'ın Laneti","30","Percy Jackson ve Olimposlular Labirent Savaşı","35","Percy Jackson ve Olimposlular Son Olimposlu","35","Percy Jackson ve Olimposlular Melez Dosyaları","25","Percy Jackson ve Olimposlular Yunan Kahramanları","40","Percy Jackson ve Olimposlular Melez Kampı Gizli Bilgileri","24","Kane Günceleri 1 Kırmızı Piramit","48","Kane Günceleri 2 Ateş Tahtı","42","Kane Günceleri 3 Yılanın Gölgesi","38","Olimpos Kahramanları Kayıp Kahraman","38","Olimpos Kahramanları Neptün'ün Oğlu","42","Olimpos Kahramanları Athena'nın İşareti","44","Olimpos Kahramanları Hades'in Evi","44","Olimpos Kahramanları Olimpos'un Kanı","42","Olimpos Kahramanları Melez Günlükleri","26","Magnus Chase ve Asgard Tanrıları 1 Yaz Kılıcı","44","Magnus Chase ve Asgard Tanrıları 2 Thor'un Çekici","44","Magnus Chase ve Asgard Tanrıları 3 Ölüm Gemisi","36","Apollon'un Görevleri Gizli Kahin","30","Apollon'un Görevleri Karanlık Kehanet","35","Apollon'un Görevleri Yanan Dehliz","35","Apollon'un Görevleri Tiran'ın Mezarı","35","Apollon'un Görevleri Nero'nun Kulesi","33"];
let doyleKitaplari=["Sherlock Holmes Sır Perdesi Aralanıyor Kızıl Dosya","15","Sherlock Holmes Kayıp Hikayenin İzinde Dörtlerin İmzası","15","Sherlock Holmes Dehanın Esrarengiz Yüzü Korku Vadisi","20","Sherlock Holmes Gizemli Pençelerin Laneti Baskerville'lerin Köpeği","28","Sherlock Holmes Suç Uyanıyor","20","Sherlock Holmes Oyun Başladı","20","Sherlock Holmes Şüphenin İzinde","20","Sherlock Holmes Bir Suçun Portresi","20","Sherlock Holmes Gölge Koleksiyonu","20"];
let rowlingResim=["images/felsefeTasi.jpg","images/sirlarOdasi"];
let i;
let kitapResim,kitapSecenek,kitapAciklama;
let eklenecekler=[];
let fiyatlar=[];
let listeKitap=document.getElementById("sepetKitap");
let toplamTutar=0;
let tutar=document.getElementById("sepetTutar");
let kod="XGAVBT";

for(i=0;i<document.getElementsByName("yazarlar").length;i++){
    document.getElementsByName("yazarlar")[i].addEventListener("change",kitaplariGetir);
}

function olustur(){
    kitapResim=document.createElement("img");
    kitapAciklama=document.createElement("label");
    kitapSecenek=document.createElement("input");
    document.getElementById("kitapPanel").appendChild(kitapResim);
    document.getElementById("kitapPanel").appendChild(kitapAciklama);
    document.getElementById("kitapPanel").appendChild(kitapSecenek);
    kitapResim.setAttribute("src", "images/felsefeTasi.jpg");
    kitapSecenek.type="checkbox";
    kitapSecenek.setAttribute("name","kitaplar");
    kitapAciklama.setAttribute("for","kitaplar");
    kitapAciklama.setAttribute("class","kitaplar");
}

function kitaplariGetir(){
    const sil=document.getElementById("kitapPanel");
    while (sil.hasChildNodes()){
        sil.removeChild(sil.firstChild);
    }

    if(document.getElementById("rowling").checked){
        for(i=0;i<rowlingKitaplari.length;i=i+2){
            olustur();
            kitapSecenek.value=rowlingKitaplari[i+1];
            kitapAciklama.innerHTML=rowlingKitaplari[i];
        }
        for(i=0;i<rowlingResim.length;i++){
            olustur();
            kitapResim=rowlingResim[i];
        }
    }
    else if(document.getElementById("verdon").checked){
        for(i=0;i<verdonKitaplari.length;i=i+2){
            olustur();
            kitapSecenek.value=verdonKitaplari[i+1];
            kitapAciklama.innerHTML=verdonKitaplari[i];
        }
    }
    else if(document.getElementById("riordan").checked){
        for(i=0;i<riordanKitaplari.length;i=i+2){
            olustur();
            kitapSecenek.value=riordanKitaplari[i+1];
            kitapAciklama.innerHTML=riordanKitaplari[i];
        }
    }
    else if(document.getElementById("doyle").checked){
        for(i=0;i<doyleKitaplari.length;i=i+2){
            olustur();
            kitapSecenek.value=doyleKitaplari[i+1];
            kitapAciklama.innerHTML=doyleKitaplari[i];
        }
    }
}

function sepeteEkle(){
    const listeKitaplarFiyat=document.getElementsByName("kitaplar");
    const listeKitapAd=document.getElementsByClassName("kitaplar");
    let adet=document.getElementById("kitapAdet").value;
    eklenecekler=[];
    fiyatlar=[];

    for(i=0;i<listeKitaplarFiyat.length;i++){
        if(listeKitaplarFiyat[i].checked){
            toplamTutar+=(Number(listeKitaplarFiyat[i].value)*adet);
            eklenecekler.push(listeKitapAd[i].innerHTML);
            fiyatlar.push(listeKitaplarFiyat[i].value);
        }
    }
    console.log(eklenecekler);
    console.log(fiyatlar);

    for(i=0;i<adet;i++){
        let sepeteEklenecekUrun;
        for(let b=0;b<eklenecekler.length;b++){
            sepeteEklenecekUrun=document.createElement("option");
            listeKitap.options.add(sepeteEklenecekUrun);
            sepeteEklenecekUrun.text=eklenecekler[b];
            sepeteEklenecekUrun.value=fiyatlar[b];
        }
    }
    tutar.innerHTML=toplamTutar+" TL";
}

function sepettenCikar(){
    let seciliIndeks=listeKitap.selectedIndex;
    let silinecekKitapFiyati=listeKitap.options[seciliIndeks].value;
    listeKitap.options.remove(seciliIndeks);
    toplamTutar=toplamTutar-silinecekKitapFiyati;
    tutar.innerHTML=toplamTutar+" TL";
}

function sepetiBosalt(){
    document.querySelectorAll('#sepetKitap option').forEach(eleman => eleman.remove());
    toplamTutar=0;
    tutar.innerHTML=toplamTutar+" TL";
}

function koduEkle(){
    let girilenKod=document.getElementById("txtIndirim").value;
    if(girilenKod==kod){
        if(toplamTutar>=75){
            toplamTutar=toplamTutar-10;
            tutar.innerHTML=toplamTutar+" TL";
            document.getElementById("sonuc").innerHTML="İndirim Uygulandı.";
            document.getElementById("txtIndirim").disabled=true;
            document.getElementById("txtIndirim").value="";
        }
        else{
            document.getElementById("sonuc").innerHTML="Girdiğiniz kod için sepet tutarı 75 lira ve üzeri olmalıdır.";
        }
    }
    else{
        document.getElementById("sonuc").innerHTML="Geçerli bir kod girmediniz";
    }
}