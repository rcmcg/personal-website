import Header from "../../components/header/Header.tsx";

interface Photo {
  url: string,
  caption: string,
  date: Date
}

function PhotosPage() {
  const photos: Photo[] = [
    {
      url: "/photos/beatty.jpg",
      caption: "Early morning on Beatty St., Vancouver, BC",
      date: new Date(2025, 11, 27)
    },
    {
      url: "/photos/tokyo_tower_night.jpg",
      caption: "Tokyo Tower at night seen from afar",
      date: new Date(2025, 3, 23)
    },
    {
      url: "/photos/rbc_gran_fondo_2025.jpg",
      caption: "View from my starting corral in the RBC Whistler Gran Fond 2025",
      date: new Date(2025, 8, 6)
    },
    {
      url: "/photos/blood_moon.jpg",
      caption: "Blood moon as seen from Stadium-Chinatown SkyTrain station",
      date: new Date(2025, 8, 4)
    },
    {
      url: "/photos/fall_leaves.jpg",
      caption: "Fall leaves near Vancouver Public Library",
      date: new Date(2025, 7, 24)
    },
    {
      url: "/photos/buildings.jpg",
      caption: "Some buildings in downtown Vancouver",
      date: new Date(2025, 8, 27)
    },
    {
      url: "/photos/burnaby_red_sky.jpg",
      caption: "Hazy morning in Burnaby, BC",
      date: new Date(2025, 0, 7)
    },
    {
      url: "/photos/cf_pacific_centre_apple.jpg",
      caption: "Apple Pacific Centre in Vancouver, BC",
      date: new Date(2025, 6, 22)
    },
    {
      url: "/photos/east_van.jpg",
      caption: "Looking towards Playland in East Vancouver, BC",
      date: new Date(2025, 7, 27)
    },
    {
      url: "/photos/fall_leaves_2.jpg",
      caption: "Fall leaves near the Parq Casino, Vancouver, BC",
      date: new Date(2025, 9, 24)
    },
    {
      url: "/photos/fog.jpg",
      caption: "Foggy morning looking towards Canada Place from Stanley Park, BC",
      date: new Date(2025, 8, 28)
    },
    {
      url: "/photos/fuji.jpg",
      caption: "Mt. Fuji as seen from the Nippondaira Hotel, Shizuoka, Japan",
      date: new Date(2025, 3, 16)
    },
    {
      url: "/photos/japan_train_tracks.jpg",
      caption: "Train tracks in Shibuya, Tokyo, Japan",
      date: new Date(2025, 3, 26)
    },
    {
      url: "/photos/rats_in_the_wall.jpg",
      caption: "Rats in the wall at Steven's Cocktail Corner Bar in Langley, BC",
      date: new Date(2025, 6, 11)
    },
    {
      url: "/photos/billboard.jpg",
      caption: "Foliage being cleared from a billboard",
      date: new Date(2025, 8, 15)
    },
    {
      url: "/photos/tokyo_tower_night_fish.jpg",
      caption: "Tokyo Tower at night decorated with koinobori for Boys' Day",
      date: new Date(2025, 3, 23)
    },
  ]

  return (
    <>
      <Header />
      <div className={"main"}>
        <div className={"main-body"}>
          <div className={"gallery-container"}>
            {photos.map(photo => {
              return (
                <>
                  <div className={"gallery-item"}>
                    <img src={photo.url} alt={photo.caption}/>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotosPage