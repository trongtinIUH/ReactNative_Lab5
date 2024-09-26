import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const ProductScreen = () => {
  const [selectedColor, setSelectedColor] = useState('Blue');
  const [modalVisible, setModalVisible] = useState(false); // Biến kiểm soát Modal

  const colors = ['Blue', 'Black', 'White', 'Red'];
  const colorNames = {
    Blue: 'Xanh dương',
    Black: 'Đen',
    White: 'Trắng',
    Red: 'Đỏ',
  };

  const images = {
    Blue: require('./img/dtXanh.png'),
    Black: require('./img/dtden.png'),
    White: require('./img/dttrang.png'),
    Red: require('./img/dtdo.png'),
  };


  const handleColorChange = (color) => {
    setSelectedColor(color); // Chỉ cập nhật màu, không đóng Modal
};


  return (
    <View style={styles.container}>
      {/* Hình ảnh sản phẩm */}
      <Image 
        source={images[selectedColor]} 
        style={styles.image}
      />
      <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <Text style={styles.reviews}>★★★★★ </Text>
      <Text style={styles.reviews2}> (Xem 828 đánh giá) </Text>
      <Text style={styles.price}>Giá: 1.790.000 đ</Text>
      <Text style={styles.oldPrice}>Giá cũ: 1.790.000 đ</Text>
      <Text style={styles.textHoanTien}>Ở ĐÂU RẺ HƠN HOÀN TIỀN?</Text>

      {/* Nút chọn màu */}
      <TouchableOpacity style={styles.colorButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>

      {/* Modal để chọn màu và hiển thị lại sản phẩm */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Thông tin sản phẩm và hình ảnh trong modal */}
            <View style={styles.productInfoModal}>
              <Image 
                source={images[selectedColor]} 
                style={styles.imageModal}
              />
              <View style={styles.textInfoModal}>
                <Text style={styles.productNameModal}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                    <Text style={styles.colorSelected}>Màu: {colorNames[selectedColor]}</Text>
                <Text style={styles.priceModal}>1.790.000 đ</Text>
                <Text style={styles.supplierModal}>Cung cấp bởi Tiki Tradding</Text>
              </View>
            </View>

            {/* Màu sắc để chọn */}
            <Text style={styles.modalTitle}>Chọn một màu bên dưới:</Text>
            <View style={styles.colorOptions}>
              {colors.map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.colorOption, 
                    { backgroundColor: color.toLowerCase(), borderWidth: selectedColor === color ? 2 : 1 }
                  ]}
                  onPress={() => handleColorChange(color)}
                />
              ))}
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>XONG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* Nút chọn mua */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    position: 'relative',
    left: 50,
    width: 160,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviews: {
    color: '#ffcc00',
    marginBottom: 10,
  },
  reviews2: {
    position: 'relative',
    bottom: 27,
    left: 80,
    color: 'black',
    fontSize: 13,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#777',
    marginBottom: 20,
  },
  textHoanTien: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colorButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  colorButtonText: {
    fontSize: 16,
    color: '#000',
  },
  buyButton: {
    backgroundColor: '#ff3300',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Styles cho Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colorOptions: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'grey',
  },
  colorOption: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    
  },
  closeButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
   // Styles cho Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Làm mờ nền sau modal
  },
  modalContent: {
    width: 350,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  productInfoModal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageModal: {
    width: 80,
    height: 120,
    marginRight: 20,
  },
  textInfoModal: {
    alignItems: 'flex-start',
  },
  productNameModal: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ProductScreen;
