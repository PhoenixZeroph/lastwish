// inputs: wish_hash, receiver_pubkey, expiry
fn main(wish_hash: Field, rx_pk_x: Field, rx_pk_y: Field, expiry: Field) {
    constrain expiry > std::date::now();       // simple sanity check
    let commitment = poseidon([wish_hash, rx_pk_x, rx_pk_y, expiry]);
    // output commitment (used as tokenURI hash)
    constrain commitment == std::env::public_output(0);
}
