import folium
# folium 0.5.0

m = folium.Map(location=[36.1627, -86.7816])
folium.Marker([36.1627, -86.7816], popup='<a target="_blank" href = https://www.youtube.com/watch?v=oHg5SJYRHA0>Click me</a>').add_to(m);

m.save('map.html')
