function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.price * item.quantity;
    });
    setTotal(newTotal);
  }, [cart]);

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}
