export function getEntries() {
  return overlayEntries.map((e, i) => ({
    ...e,
    id: i
  }));
}

const overlayEntries = [
  {   
    title: "USGS Lidar Point Cloud for BHF",
    state: "RI",
    year: 2024,
    series: "BHF",
    edition: "",
    scale: 0,
    thumb: "maps/lidar.jpg",
    citation: "“USGS Lidar Point Cloud RI_Statewide_D22 395000_192500” U.S. Geological Survey, Jan. 2024. Accessed: 04/17/2025. [Online]. Available: https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/RI_Statewide_D22/RI_Statewide_1_D22/0_file_download_links.txt",

    geotiffUrl: "maps/lidar_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'EduceLab', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {   
    title: "Battle of Rhode Island Historic District boundaries",
    state: "RI",
    year: 1969,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Marcia M. Greenlee, Battle of Rhode Island Historic District (Battle of Rhode Island Site), National Register of Historic Places Inventory–Nomination Form, prepared for the Rhode Island Historical Preservation Commission under contract to the Afro-American Bicentennial Corporation, 1973, p. 14; National Park Service, National Register of Historic Places records; National Archives Identifier 41374753; National Archives and Records Administration, National Archives Catalog, https://catalog.archives.gov/id/41374753 (accessed March 6, 2026).",

    tileUrl: "maps/DOI_NPS_1969_tiles/{z}/{x}/{y}.png",
    minNativeZoom: 8,
    maxNativeZoom: 16,
    maxZoom: 22,
    geotiffUrl: "maps/DOI_NPS_1969_defl_f_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'US National Archives', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {   
    title: "A Topographical Chart of the Bay of Narraganset in the Province of New England",
    state: "RI",
    year: 1777,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Charles Blaskowitz and William Faden, A Topographical Chart of the Bay of Narraganset in the Province of New England: With All the Isles Contained Therein, Among Which Rhode Island and Connonicut Have Been Particularly Surveyed; Shewing the True Position & Bearings of the Banks, Shoals, Rocks &c., as Likewise the Soundings; to Which Have Been Added the Several Works & Batteries Raised by the Americans; Taken by Order of the Principal Farmers on Rhode Island, map, London: William Faden, 1777; Norman B. Leventhal Map & Education Center, Boston Public Library; digital image, Leventhal Map & Education Center Digital Collections, https://collections.leventhalmap.org/search/commonwealth:3f462w67b (accessed March 2, 2026).",
    
    tileUrl: "maps/Blaskowitz_1777_tiles/{z}/{x}/{y}.png",
    minNativeZoom: 8,
    maxNativeZoom: 16,
    maxZoom: 22,
    geotiffUrl: "maps/Blaskowitz_1777_jpg90_f_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'Norman B. Leventhal Map & Education Center', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {   
    title: "Plan von Rhode Island",
    state: "RI",
    year: 1778,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Johann Christian Schiffer, Plan von Rhode Island, und deren dem comando des Herrn General Majors Presgott inf dies-malig befundlichen campements, map, [1777]; Geography and Map Division; Library of Congress, Washington, D.C.; digital image, Library of Congress Digital Collections, https://www.loc.gov/item/75690704/ (accessed March 12, 2026).",
    
    tileUrl: "maps/Schiffer_1777_tiles/{z}/{x}/{y}.png",
    minNativeZoom: 8,
    maxNativeZoom: 16,
    maxZoom: 22,
    geotiffUrl: "maps/Schiffer_1777_defl_f_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'US Library of Congress', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {   
    title: "Plan of the works at Windmill Hill",
    state: "RI",
    year: 1777,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Plan of the Works at Windmill Hill, December 31st 1777: Plan nr 19, map, December 31, 1777; William L. Clements Library, University of Michigan, Ann Arbor, Michigan; digital image, William L. Clements Library Image Bank, University of Michigan Library Digital Collections, https://quod.lib.umich.edu/w/wcl1ic/x-659/wcl000771 (accessed March 13, 2026).",
    
    tileUrl: "maps/Clinton_1777_tiles/{z}/{x}/{y}.png",
    minNativeZoom: 8,
    maxNativeZoom: 16,
    maxZoom: 22,
    geotiffUrl: "maps/Clinton_1777_jpg60_f_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'University of Michigan Library', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {   
    title: "Plan of the northern part of Rhode Island in the township of Portsmouth",
    state: "RI",
    year: 1778,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Edward Fage (attributed), Plan of the Northern Part of Rhode Island in the Township of Portsmouth, Shewing the British Posts of Defence as Compleated During the Possession of Rhode Island from the 8th of Dec. 1776 to the 25th of Oct. 1778, manuscript map, ca. 1778; call no. mssHM 15473; The Huntington Library, San Marino, California; digital image, Huntington Digital Library, https://hdl.huntington.org/digital/collection/p15150coll4/id/16295 (accessed March 16, 2026).",    
    
    tileUrl: "maps/Fage_1778_tiles/{z}/{x}/{y}.png",
    minNativeZoom: 8,
    maxNativeZoom: 16,
    maxZoom: 22,
    geotiffUrl: "maps/Fage_1778_defl_f_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'The Huntington Library', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {   
    title: "Plan of the adjacent coast to the northern part of Rhode Island",
    state: "RI",
    year: 1778,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Edward Fage, Plan of the Adjacent Coast to the Northern Part of Rhode Island, to Express the Route of a Body of Troops under the Command of Lieut. Colonel Campbell of the 22d Regiment to Destroy the Enemies Batteaux, Vessels, Galley &c. Which Was Accomplished May 25th 1778, manuscript map, 1778; William L. Clements Library, University of Michigan, Ann Arbor, Michigan; digital image, William L. Clements Library Image Bank, University of Michigan Library Digital Collections, https://quod.lib.umich.edu/w/wcl1ic/x-628/wcl000739 (accessed March 17, 2026).",

    tileUrl: "maps/Fage_2_1778_tiles/{z}/{x}/{y}.png",
    minNativeZoom: 8,
    maxNativeZoom: 16,
    maxZoom: 22,
    geotiffUrl: "maps/Fage_2_1778_defl_f_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'University of Michigan Library', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {   
    title: "Plan of a barrack for 300 men",
    state: "RI",
    year: 1778,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Plan of a Barrack for 300 Men, and Officers, Erected at Windmill Hill with an Abbatis, December 1777: Plan nr 18, manuscript map, December 1777; William L. Clements Library, University of Michigan, Ann Arbor, Michigan; digital image, William L. Clements Library Image Bank, University of Michigan Library Digital Collections, https://quod.lib.umich.edu/w/wcl1ic/x-6053/wcl006127 (accessed March 17, 2026).",

    tileUrl: "maps/Clinton_2_1777_tiles/{z}/{x}/{y}.png",
    minNativeZoom: 8,
    maxNativeZoom: 16,
    maxZoom: 22,
    geotiffUrl: "maps/Clinton_2_1777_defl_f_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'University of Michigan Library', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {   
    title: "1939 Rhode Island Aerial Photographs",
    state: "RI",
    year: 1939,
    series: "ArcGIS MapServer",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "University of Rhode Island Environmental Data Center (URI EDC) and Rhode Island Geographic Information System (RIGIS), 1939 Rhode Island Aerial Photographs, aerial imagery dataset, University of Rhode Island Environmental Data Center, available at https://www.rigis.org/maps/edc::1939-rhode-island-aerial-photographs/about (accessed March 18, 2026).",
    
    tileUrl: "https://tiles.arcgis.com/tiles/S8zZg9pg23JUEexQ/arcgis/rest/services/atlas_img_1939/MapServer/tile/{z}/{y}/{x}",
    bounds: [
      [41.144, -72.676],
      [42.028, -70.371]
    ],
    center: [41.586, -71.524],
    zoom: 11,
    attribution: "&copy; URI EDC, RIGIS",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "URI EDC, RIGIS",
      datum: "WGS 84 / Web Mercator",
      projection: "EPSG:3857",
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  }, 
  {   
    title: "1951–1952 Rhode Island Aerial Photographs",
    state: "RI",
    year: 1951,
    series: "ArcGIS MapServer",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "University of Rhode Island Environmental Data Center (URI EDC) and Rhode Island Geographic Information System (RIGIS), 1951–1952 Rhode Island Aerial Photographs, aerial imagery dataset, University of Rhode Island Environmental Data Center, https://www.rigis.org/maps/edc::1951-1952-rhode-island-aerial-photographs/about (accessed March 18, 2026).",
    
    tileUrl: "https://tiles.arcgis.com/tiles/S8zZg9pg23JUEexQ/arcgis/rest/services/atlas_img_1951_1952/MapServer/tile/{z}/{y}/{x}",
    bounds: [
      [41.144, -72.676],
      [42.028, -70.371]
    ],
    center: [41.586, -71.524],
    zoom: 11,
    attribution: "&copy; URI EDC, RIGIS",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "URI EDC, RIGIS",
      datum: "WGS 84 / Web Mercator",
      projection: "EPSG:3857",
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1962 Rhode Island Aerial Photographs",
    state: "RI",
    year: 1962,
    series: "ArcGIS MapServer",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "University of Rhode Island Environmental Data Center (URI EDC) and Rhode Island Geographic Information System (RIGIS), 1962 Aerial Photography, aerial imagery dataset, University of Rhode Island Environmental Data Center, available at https://www.rigis.org/content/edc::1962-aerial-photography/about (accessed March 18, 2026).",
    
    tileUrl: "https://maps.edc.uri.edu/arcgis/rest/services/Atlas_imageryBaseMapsEarthCover/1962_RISPP/MapServer/tile/{z}/{y}/{x}",
    bounds: [
      [41.144, -72.676],
      [42.028, -70.371]
    ],
    center: [41.586, -71.524],
    zoom: 11,
    attribution: "&copy; URI EDC, RIGIS",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "URI EDC, RIGIS",
      datum: "WGS 84 / Web Mercator",
      projection: "EPSG:3857",
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1972 Rhode Island Aerial Photographs",
    state: "RI",
    year: 1972,
    series: "ArcGIS MapServer",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "University of Rhode Island Environmental Data Center (URI EDC) and Rhode Island Geographic Information System (RIGIS), 1972 Aerial Photography, aerial imagery dataset, University of Rhode Island Environmental Data Center, available at https://www.rigis.org/content/edc::1972-aerial-photography/about (accessed March 18, 2026).",
    
    tileUrl: "https://tiles.arcgis.com/tiles/S8zZg9pg23JUEexQ/arcgis/rest/services/atlas_img_1972/MapServer/tile/{z}/{y}/{x}",
    bounds: [
      [41.144, -72.676],
      [42.028, -70.371]
    ],
    center: [41.586, -71.524],
    zoom: 11,
    attribution: "&copy; URI EDC, RIGIS",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "URI EDC, RIGIS",
      datum: "WGS 84 / Web Mercator",
      projection: "EPSG:3857",
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1981 Rhode Island Aerial Photographs",
    state: "RI",
    year: 1981,
    series: "ArcGIS MapServer",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "University of Rhode Island Environmental Data Center (URI EDC) and Rhode Island Geographic Information System (RIGIS), 1982 Aerial Photography, aerial imagery dataset, University of Rhode Island Environmental Data Center, available at https://www.rigis.org/content/edc::1982-aerial-photography/about (accessed March 18, 2026).",
    
    tileUrl: "https://tiles.arcgis.com/tiles/S8zZg9pg23JUEexQ/arcgis/rest/services/atlas_img_1981/MapServer/tile/{z}/{y}/{x}",
    bounds: [
      [41.144, -72.676],
      [42.028, -70.371]
    ],
    center: [41.586, -71.524],
    zoom: 11,
    attribution: "&copy; URI EDC, RIGIS",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "University of Rhode Island Environmental Data Center (URI EDC); Rhode Island Geographic Information System (RIGIS)",
      datum: "WGS 84 / Web Mercator",
      projection: "EPSG:3857",
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1988 Rhode Island Aerial Photographs",
    state: "RI",
    year: 1988,
    series: "ArcGIS MapServer",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "University of Rhode Island Environmental Data Center (URI EDC) and Rhode Island Geographic Information System (RIGIS), 1988 Aerial Photography, aerial imagery dataset, University of Rhode Island Environmental Data Center, available at https://www.rigis.org/content/edc::1988-aerial-photography/about (accessed March 18, 2026).",
    
    tileUrl: "https://tiles.arcgis.com/tiles/S8zZg9pg23JUEexQ/arcgis/rest/services/atlas_img_1988/MapServer/tile/{z}/{y}/{x}",
    
    bounds: [
      [41.144, -72.676],
      [42.028, -70.371]
    ],
    center: [41.586, -71.524],
    zoom: 11,
    attribution: "&copy; URI EDC, RIGIS",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "University of Rhode Island Environmental Data Center (URI EDC); Rhode Island Geographic Information System (RIGIS)",
      datum: "WGS 84 / Web Mercator",
      projection: "EPSG:3857",
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1938 USGS Aerial Photograph (Single Frame 1F00000060016)",
    state: "RI",
    year: 1938,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19381213 Aerial Single Frame Photo ID: 1F00000060016, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_AR1F00000060016_defl_geo.tif",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1938 USGS Aerial Photograph (Single Frame 1F00000060125)",
    state: "RI",
    year: 1938,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19381213 Aerial Single Frame Photo ID: 1F00000060125, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_AR1F00000060125_geo.tif",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1938 USGS Aerial Photograph (Single Frame 1F00000060126)",
    state: "RI",
    year: 1938,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19381213 Aerial Single Frame Photo ID: 1F00000060126, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_AR1F00000060126_defl_geo.tif",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1938 USGS Aerial Photograph (Single Frame 1F00000060127)",
    state: "RI",
    year: 1938,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19381213 Aerial Single Frame Photo ID: 1F00000060127, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_AR1F00000060127_geo.tif",

    downloads: {},
    fixUrl: "",
    meta: {     publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1960 USGS Aerial Photograph (Single Frame B593310410435)",
    state: "RI",
    year: 1960,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19600501 Aerial Single Frame Photo ID: B593310410435, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_ARB593310410435_defl_geo.tif",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1960 USGS Aerial Photograph (Single Frame B593310410434)",
    state: "RI",
    year: 1960,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19600501 Aerial Single Frame Photo ID: B593310410434, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_ARB593310410434_defl_geo.tif",
    
    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1966 USGS Aerial Photograph (Single Frame 1VBKB00010042)",
    state: "RI",
    year: 1966,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19660222 Aerial Single Frame Photo ID: 1VBKB00010042, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_AR1VBKB00010042_jpeg_geo.tif",
    
    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1966 USGS Aerial Photograph (Single Frame 1VBKB00010041)",
    state: "RI",
    year: 1966,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19660222 Aerial Single Frame Photo ID: 1VBKB00010041, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_AR1VBKB00010041_geo.tif",
    
    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1969 USGS Aerial Photograph (Single Frame 6103000806335)",
    state: "RI",
    year: 1969,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19690913 Aerial Single Frame Photo ID: 6103000806335, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_AR6103000806335_jpeg_geo.tif",
    
    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1969 USGS Aerial Photograph (Single Frame 6103000806334)",
    state: "RI",
    year: 1969,
    series: "USGS Single Frame Aerial Photography",
    edition: "",
    scale: 24000,
    thumb: "",
    citation: "U.S. Geological Survey 19690913 Aerial Single Frame Photo ID: 6103000806334, aerial photograph, U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, Single Frame Aerial Photography series, available at https://doi.org/10.5066/F7610XKM (accessed March 20, 2026).",
    
    geotiffUrl: "aerial-photos/USGS_AR6103000806334_jpeg_geo.tif",
    
    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center",
      datum: "WGS 84",
      projection: 'Unstated',
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "Rhode Island NAPP Historic Imagery",
    state: "RI",
    year: '1991-2001',
    series: "ArcGIS MapServer",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "USDA FPAC-BC, Rhode Island NAPP Historic Imagery, black-and-white aerial imagery web map/service derived from imagery acquired for the MDOQ program, ArcGIS, updated February 20, 2025, available at https://www.arcgis.com/home/item.html?id=12f2ddd7f9d0407cb8032b1cde7edb21 (accessed March 24, 2026).",
    
    tileUrl: "https://tiles.arcgis.com/tiles/LLVEmB8Lsae3Um4s/arcgis/rest/services/ri_mdoq/MapServer/tile/{z}/{y}/{x}",
    bounds: [
      [41.144, -72.676],
      [42.028, -70.371]
    ],
    center: [41.586, -71.524],
    zoom: 11,
    attribution: "&copy; USDA FPAC-BC",

    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "USDA FPAC-BC; FSA Aerial Photography Field Office (APFO)",
      datum: "WGS 84 / Web Mercator",
      projection: "EPSG:3857",
      gnisCellId: "",
      gnisCell: "",
      woodlandTint: "N/A"
    }
  },
  {   
    title: "1939 USGS Historical Topographic Map (Prudence Island 353446)",
    state: "RI",
    year: 1939,
    series: "USGS Historical Topographic Map Collection",
    edition: "",
    scale: 31680,
    thumb: "",
    citation: "U.S. Geological Survey (USGS), 1939, Prudence Island, Rhode Island, 1:31,680-scale historical topographic map (Historical Topographic Map Collection), map sheet 353446 (scan ID 31680), U.S. Geological Survey National Geospatial Technical Operations Center (NGTOC), Reston, Virginia, available at https://thor-f5.er.usgs.gov/ngtoc/metadata/waf/maps/historicaltopo/pdf/RI/31680/RI_Prudence_Island_353446_1939_31680_geo.xml (accessed March 25, 2026).",
    
    geotiffUrl: "maps/RI_Prudence_Island_353446_1939_31680_geo.tif",
    
    downloads: {},
    fixUrl: "",
    meta: {     
      publishers: "U.S. Geological Survey (USGS) National Geospatial Technical Operations Center (NGTOC)",
      datum: "WGS 84",
      projection: "EPSG:4326 reprojected from Polyconic (NAD27)",
      gnisCellId: "353446",
      gnisCell: "Prudence Island",
      woodlandTint: "Varies (historical topo symbology)"
    }
  },
  { 
  title: "1939 USGS Historical Topographic Map (Prudence Island 463162)",
  state: "RI",
  year: 1939,
  series: "USGS Historical Topographic Map Collection",
  edition: "",
  scale: 31680,
  thumb: "",
  citation: "U.S. Geological Survey (USGS), 1939, Prudence Island, Rhode Island, 1:31,680-scale historical topographic map (Historical Topographic Map Collection), map sheet 463162 (scan ID 31680), U.S. Geological Survey National Geospatial Technical Operations Center (NGTOC), Reston, Virginia, available at https://thor-f5.er.usgs.gov/ngtoc/metadata/waf/maps/historicaltopo/pdf/RI/31680/RI_Prudence_Island_463162_1939_31680_geo.xml (accessed March 25, 2026).",

  geotiffUrl: "maps/RI_Prudence_Island_463162_1939_31680_geo.tif",

  downloads: {},
  fixUrl: "",
  meta: {   
    publishers: "U.S. Geological Survey (USGS) National Geospatial Technical Operations Center (NGTOC)",
    datum: "WGS 84",
    projection: "EPSG:4326 reprojected from Polyconic (NAD27)",
    gnisCellId: "463162",
    gnisCell: "Prudence Island",
    woodlandTint: "Varies (historical topo symbology)"
  }
},
{ 
  title: "1942 USGS Historical Topographic Map (Prudence Island 353447)",
  state: "RI",
  year: 1942,
  series: "USGS Historical Topographic Map Collection",
  edition: "",
  scale: 31680,
  thumb: "",
  citation: "U.S. Geological Survey (USGS), 1942, Prudence Island, Rhode Island, 1:31,680-scale historical topographic map (Historical Topographic Map Collection), map sheet 353447 (scan ID 31680), U.S. Geological Survey National Geospatial Technical Operations Center (NGTOC), Reston, Virginia, available at https://thor-f5.er.usgs.gov/ngtoc/metadata/waf/maps/historicaltopo/pdf/RI/31680/RI_Prudence_Island_353447_1942_31680_geo.xml (accessed March 25, 2026).",

  geotiffUrl: "maps/RI_Prudence_Island_353447_1942_31680_geo.tif",

  downloads: {},
  fixUrl: "",
  meta: {   
    publishers: "U.S. Geological Survey (USGS) National Geospatial Technical Operations Center (NGTOC)",
    datum: "WGS 84",
    projection: "EPSG:4326 reprojected from Polyconic (NAD27)",
    gnisCellId: "353447",
    gnisCell: "Prudence Island",
    woodlandTint: "Varies (historical topo symbology)"
  }
},
{ 
  title: "1942 USGS Historical Topographic Map (Prudence Island 353448)",
  state: "RI",
  year: 1942,
  series: "USGS Historical Topographic Map Collection",
  edition: "",
  scale: 31680,
  thumb: "",
  citation: "U.S. Geological Survey (USGS), 1942, Prudence Island, Rhode Island, 1:31,680-scale historical topographic map (Historical Topographic Map Collection), map sheet 353448 (scan ID 31680), U.S. Geological Survey National Geospatial Technical Operations Center (NGTOC), Reston, Virginia, available at https://thor-f5.er.usgs.gov/ngtoc/metadata/waf/maps/historicaltopo/pdf/RI/31680/RI_Prudence_Island_353448_1942_31680_geo.xml (accessed March 25, 2026).",

  geotiffUrl: "maps/RI_Prudence_Island_353448_1942_31680_geo.tif",

  downloads: {},
  fixUrl: "",
  meta: {   
    publishers: "U.S. Geological Survey (USGS) National Geospatial Technical Operations Center (NGTOC)",
    datum: "WGS 84",
    projection: "EPSG:4326 reprojected from Polyconic (NAD27)",
    gnisCellId: "353448",
    gnisCell: "Prudence Island",
    woodlandTint: "Varies (historical topo symbology)"
  }
},
{
  title: "A chart of the harbour of Rhode Island and Narraganset Bay",
  state: "RI",
  year: 1776,
  series: "Atlantic Neptune Charts",
  edition: "",
  scale: 51000,
  thumb: "",
  citation: "Des Barres, Joseph F. W. (Joseph Frederick Wallet), 1776, A chart of the harbour of Rhode Island and Narraganset Bay, map, Norman B. Leventhal Map & Education Center Collection, Boston Public Library, Boston, Massachusetts, Digital Commonwealth, ark:/50959/7h149w07s, available through Leventhal Map & Education Center Collections (accessed March 30, 2026).",
  
  tileUrl: "maps/DesBarres_1776_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  geotiffUrl: "maps/DesBarres_1776_defl_f_geo.tif",

  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "Norman B. Leventhal Map & Education Center, Boston Public Library",
    datum: "WGS84",
  }
},
{
  title: "A map of the bay of Narraganset with the islands therein and part of the country adjacent.",
  state: "RI",
  year: 1777,
  series: "",
  edition: "",
  scale: 63360,
  thumb: "",
  citation: "Blaskowitz, Charles, 1777, A map of the bay of Narraganset with the islands therein and part of the country adjacent, map, Library of Congress, Geography and Map Division, Washington, DC, available at https://www.loc.gov/item/gm71000684/ (accessed March 30, 2026).",
  
  tileUrl: "maps/Blaskowitz_1776_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  geotiffUrl: "maps/Blaskowitz_1776_geo.tif",
  
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "Library of Congress, Geography and Map Division"
  }
},
{
  title: "[Narragansett Bay and Rhode Island].",
  state: "RI",
  year: 1770,
  series: "",
  edition: "",
  scale: 52000,
  thumb: "",
  citation: "Anonymous {Fage?], [Narragansett Bay and Rhode Island]., ca. 1770s, map, William L. Clements Library Image Bank, William L. Clements Library, University of Michigan, Ann Arbor, Michigan, available at https://quod.lib.umich.edu/w/wcl1ic/x-8265/wcl008334 (accessed March 30, 2026).",
  
  tileUrl: "maps/Fage_177-_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  geotiffUrl: "maps/Fage_177-_defl_f_geo..tif",
  
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "William L. Clements Library, University of Michigan"
  }
},
{
  title: "Plan of a battery for six guns and a redout for one hundred men and two royals erected upon Windmill Hill eight miles and a half n.n.e. of Newport (Nr. 3).",
  state: "RI",
  year: 1777,
  series: "",
  edition: "Nr. 3",
  scale: "",
  thumb: "",
  citation: "Plan of a battery for six guns and a redout for one hundred men and two royals erected upon Windmill Hill eight miles and a half n.n.e. of Newport (Nr. 3)., [1777], map, William L. Clements Library Image Bank, William L. Clements Library, University of Michigan, Ann Arbor, Michigan, available at https://quod.lib.umich.edu/w/wcl1ic/x-660/wcl000772 (accessed April 30 2026).",
  
  tileUrl: "maps/Clinton_3_1777_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  geotiffUrl: "maps/Clinton_3_1777_geo.tif",
  
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "William L. Clements Library, University of Michigan"
  }
},
{
  title: "1777 A Draught of Rhode Island",
  state: "RI",
  year: 1777,
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  
  citation: "A draught of Rhode Island, 1777, map, William L. Clements Library Image Bank, William L. Clements Library, University of Michigan, Ann Arbor, Michigan, available at https://quod.lib.umich.edu/w/wcl1ic/x-8364/wcl008434 (accessed April 3, 2026).",
  tileUrl: "maps/Clinton_4_1777_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  geotiffUrl: "maps/Clinton_4_1777_geo.tif",
  
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "William L. Clements Library, University of Michigan"
  }
},
{
  title: "Plan of Rhode-Island / Surveyed and drawn by Edw: Fage, captn. Royal Artillery, in the years 1777, 78 & 79.",
  state: "RI",
  year: 1777,
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  
  tileUrl: "maps/Fage_1779_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  citation: "Fage, Edward, 1777–1779, Plan of Rhode-Island / Surveyed and drawn by Edw: Fage, captn. Royal Artillery, in the years 1777, 78 & 79., map, William L. Clements Library Image Bank, William L. Clements Library, University of Michigan, Ann Arbor, Michigan, available at https://quod.lib.umich.edu/w/wcl1ic/x-828/wcl000922 (accessed April 3, 2026).",
  geotiffUrl: "maps/Fage_1779_geo.tif",
  
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "William L. Clements Library, University of Michigan"
  }
},
{
  title: "[Narragansett Bay and the surrounding shores].",
  state: "RI",
  year: "1770s",
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  citation: "Wheeler, Thomas, [177-], [Narragansett Bay and the surrounding shores]., map, William L. Clements Library Image Bank, William L. Clements Library, University of Michigan, Ann Arbor, Michigan, available at https://quod.lib.umich.edu/w/wcl1ic/x-826/wcl000920 (accessed April 3, 2026).",
  
  tileUrl: "maps/Wheeler_177-_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  
  geotiffUrl: "maps/Wheeler_177-_geo.tif",
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "William L. Clements Library, University of Michigan"
  }
},
{
  title: "Narragansett Bay Containing Rhode Island &c. (Northern Half)",
  state: "RI",
  year: 1776,
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  citation: "Royal United Services Institute for Defence and Security Studies, [1776], Narragansett Bay containing Rhode Island &c., map, Norman B. Leventhal Map & Education Center Collection, Boston Public Library, Boston, Massachusetts, available at https://collections.leventhalmap.org/search/commonwealth:hx11z2570 (accessed April 6, 2026).",
  
  tileUrl: "maps/Fage_2_1_177-_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  geotiffUrl: "maps/Fage_2_1_177-_defl_f_geo.tif",

  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "Norman B. Leventhal Map & Education Center, Boston Public Library"
  }
},
{
  title: "Narragansett Bay Containing Rhode Island &c. (Southern Half)",
  state: "RI",
  year: 1776,
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  citation: "Royal United Services Institute for Defence and Security Studies, [1776], Narragansett Bay containing Rhode Island &c., map, Norman B. Leventhal Map & Education Center Collection, Boston Public Library, Boston, Massachusetts, available at https://collections.leventhalmap.org/search/commonwealth:hx11z2570 (accessed April 6, 2026).",
  
  tileUrl: "maps/Fage_2_2_177-_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  geotiffUrl: "maps/Fage_2_2_177-_defl_f_geo.tif",

  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "Norman B. Leventhal Map & Education Center, Boston Public Library"
  }
},
{
  title: "[Map of Narragansett Bay]",
  state: "RI",
  year: 1777,
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  citation: "Des Barres, Joseph F. W. (Joseph Frederick Wallet), Richard Prescott, Sir Augustus Simon Frazer, and Royal United Services Institute for Defence and Security Studies, [ca. 1777], [Map of Narragansett Bay], map, Norman B. Leventhal Map & Education Center Collection, Boston Public Library, Boston, Massachusetts, available at https://collections.leventhalmap.org/search/commonwealth:hx11z278r (accessed April 8, 2026).",
  
  tileUrl: "maps/Fage_1777_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  geotiffUrl: "maps/Fage_1777_defl_f_geo.tif",
  
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "Norman B. Leventhal Map & Education Center, Boston Public Library"
  }
},
{
  title: "PLAN of RHODE ISLAND, the HARBOUR, the Adjacent ISLANDS, and COAST",
  state: "RI",
  year: 1778,
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  citation: "Fage, Edward; George III, King of Great Britain; and George IV, King of Great Britain, 1778, PLAN of RHODE ISLAND, the HARBOUR, the Adjacent ISLANDS, and COAST, map, Norman B. Leventhal Map & Education Center Collection, Boston Public Library, Boston, Massachusetts, available at https://collections.leventhalmap.org/search/commonwealth:hx11z3134 (accessed April 8, 2026).",
  
  tileUrl: "maps/Fage_3_1778_tiles/{z}/{x}/{y}.png",
  minNativeZoom: 8,
  maxNativeZoom: 16,
  maxZoom: 22,
  geotiffUrl: "maps/Fage_3_1778_defl_f_geo.tif",

  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "Norman B. Leventhal Map & Education Center, Boston Public Library"
  }
},
{
  title: "A chart of the harbour of Rhode Island and Narraganset Bay",
  state: "RI",
  year: 1781,
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  citation: "Des Barres, Joseph F. W. (Joseph Frederick Wallet), 1781, A chart of the harbour of Rhode Island and Narraganset Bay, map, Norman B. Leventhal Map & Education Center Collection, Boston Public Library, Boston, Massachusetts, available at https://collections.leventhalmap.org/search/commonwealth:7h149z229 (accessed April 9, 2026).",
  geotiffUrl: "maps/DesBarres_1781_defl_f_geo.tif",
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "Norman B. Leventhal Map & Education Center, Boston Public Library"
  }
},
{
  title: "Attacks upon Rhode Island, Augt. 1778",
  state: "RI",
  year: 1778,
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  citation: "Attacks upon Rhode Island, Augt. 1778, [1778], map, Norman B. Leventhal Map & Education Center Collection, Boston Public Library, Boston, Massachusetts, available at https://collections.leventhalmap.org/search/commonwealth:q524n7775 (accessed April 9, 2026).",
  geotiffUrl: "maps/LOC_GMD_1778_defl_f_geo.tif",
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "Norman B. Leventhal Map & Education Center, Boston Public Library"
  }
},
{
  title: "Port de Rhode Island et Narraganset Baye",
  state: "RI",
  year: 1778,
  series: "",
  edition: "",
  scale: "",
  thumb: "",
  citation: "Le Rouge, Georges-Louis; Des Barres, Joseph F. W. (Joseph Frederick Wallet); and 5th Viscount Howe, William, 1778, Port de Rhode Island et Narraganset Baye : publié à la requête du Vicomte Howe par le Chevalier des Barres ; traduit de l'anglais et augmenté d'après celui de Blaskowitz publiée à Londres en 1777, map, Paris: Chez Le Rouge, Norman B. Leventhal Map & Education Center, available at https://collections.leventhalmap.org/search/commonwealth:z603vs481 (accessed April 9, 2026).",
  geotiffUrl: "/maps/LeRouge_1778_defl_f_geo.tif",
  downloads: {},
  fixUrl: "",
  meta: {
    publishers: "Chez Le Rouge; Norman B. Leventhal Map & Education Center, Boston Public Library"
  }
}


];