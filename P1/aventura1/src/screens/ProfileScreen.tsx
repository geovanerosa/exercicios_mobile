import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/ProfileScreenStyles';

interface Category {
  id: number;
  image: string;
}

interface CategoryListProps {
  title: string;
  items: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ title, items }) => (
  <>
    <Text style={styles.subTitle}>{title}</Text>
    <ScrollView horizontal contentContainerStyle={styles.grid}>
      {items.map(({ id, image }) => (
        <TouchableOpacity key={id} style={styles.cardContainer}>
          <Image source={{ uri: image }} style={styles.cardImage} resizeMode="cover" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  </>
);

interface ProfileScreenProps {
  route: { params: { username: string } };
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route }) => {
  const { username } = route.params;

  const categories = {
    Favoritos: [
      { id: 1, image: 'https://m.media-amazon.com/images/I/81EK4l7881L._AC_UF1000,1000_QL80_.jpg' },
      { id: 2, image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AF2DA466E18C622AB31B75128E0E1E208CD501A5544A8808AF5FB7869AB9454E/scale?width=506&aspectRatio=2.00&format=webp' },
      { id: 3, image: 'https://br.web.img3.acsta.net/pictures/18/05/18/17/41/1920222.jpg' },
      { id: 4, image: 'https://media.fstatic.com/jvANoKd41yFDYSzGSfDlvkM5MNI=/322x478/smart/filters:format(webp)/media/movies/covers/2010/12/960859aae563d1ba36149cfd83d60fcb.jpg' },
      { id: 5, image: 'https://upload.wikimedia.org/wikipedia/pt/d/db/How_to_Get_Away_with_Murder_Temporada_2_Poster.jpg' },
      { id: 6, image: 'https://media.fstatic.com/sno4F1HxQWCKYOjhD5lQTthNAEg=/322x478/smart/filters:format(webp)/media/movies/covers/2020/05/19214.jpg' },
    ],
    Lançamentos: [
      { id: 7, image: 'https://br.web.img3.acsta.net/c_310_420/img/7e/66/7e6604d9635b905f38cd3f75e4077bda.PNG' },
      { id: 8, image: 'https://br.web.img3.acsta.net/c_310_420/img/b1/35/b1351babe7a777b7a97eded3db356990.jpg' },
      { id: 9, image: 'https://br.web.img3.acsta.net/c_310_420/img/cc/85/cc85122f8c6571afb0102ec2e27daae5.jpg' },
      { id: 10, image: 'https://br.web.img3.acsta.net/c_310_420/img/67/e4/67e451cd6d1ceb7a0d2d5cdd4ef50317.jpg' },
      { id: 11, image: 'https://br.web.img2.acsta.net/c_310_420/img/4e/bf/4ebf1fa3f5ce54e673593fa7bd41245f.PNG' },
      { id: 12, image: 'https://br.web.img3.acsta.net/c_310_420/img/b0/17/b0173047cc91f385964595cc30cbb975.jpg' },
    ],
    Sugestões: [
      { id: 13, image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/28/19962110.jpg' },
      { id: 14, image: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg' },
      { id: 15, image: 'https://br.web.img3.acsta.net/c_310_420/pictures/17/12/07/11/33/0502209.jpg' },
      { id: 16, image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/05/36/20127436.jpg' },
      { id: 17, image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/96/34/20028591.jpg' },
      { id: 18, image: 'https://br.web.img3.acsta.net/c_310_420/pictures/15/05/14/14/20/365361.jpg' },
    ],
  };

  const footerIcons = [
    { label: 'Início', uri: 'https://cdn.icon-icons.com/icons2/2065/PNG/512/home_icon_124950.png' },
    { label: 'Novidades', uri: 'https://cdn.icon-icons.com/icons2/2065/PNG/512/film_icon_124971.png' },
    { label: 'Minha Netflix', uri: 'https://avatars.githubusercontent.com/u/177570990?v=4' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>Para {username}</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Image source={{ uri: 'https://cdn.icon-icons.com/icons2/494/PNG/512/magnifier_icon-icons.com_48267.png' }} style={styles.searchImage} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {Object.entries(categories).map(([title, items]) => (
          <CategoryList key={title} title={title} items={items} />
        ))}
      </ScrollView>

      <View style={styles.footer}>
        {footerIcons.map(({ label, uri }) => (
          <TouchableOpacity key={label} style={styles.footerButton}>
            <Image source={{ uri }} style={styles.footerIcon} />
            <Text style={styles.footerText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;
