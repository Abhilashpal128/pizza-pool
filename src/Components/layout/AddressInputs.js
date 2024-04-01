export default function AddressInputs({
  addressProps,
  setAddressProps,
  disabled = false,
}) {
  const { phone, streetAddress, pinCode, city, country } = addressProps;
  return (
    <>
      <label>Phone</label>
      <input
        disabled={disabled}
        type="tel"
        placeholder="Phone Number"
        value={phone || ""}
        onChange={(e) => {
          setAddressProps("phone", e.target.value);
        }}
      />
      <label>Address</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="House No, street Address"
        value={streetAddress || ""}
        onChange={(e) => {
          setAddressProps("streetAddress", e.target.value);
        }}
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label>Pin code</label>
          <input
            disabled={disabled}
            type="number"
            placeholder="pin code"
            value={pinCode || ""}
            onChange={(e) => {
              setAddressProps("pinCode", e.target.value);
            }}
          />
        </div>
        <div>
          <label>City</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="city"
            value={city || ""}
            onChange={(e) => {
              setAddressProps("city", e.target.value);
            }}
          />
        </div>
      </div>
      <label>Country</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Country"
        value={country || ""}
        onChange={(e) => {
          setAddressProps("country", e.target.value);
        }}
      />
    </>
  );
}
