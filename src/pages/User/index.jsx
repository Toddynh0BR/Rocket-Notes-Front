import { Container } from "./style";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { FiLock, FiUser, FiCamera, FiArrowLeft } from "react-icons/fi";
import defaultUser from "../../assets/default.svg";
import { HiOutlineMail } from "react-icons/hi";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function User() {
    const navigate = useNavigate();
    const [Loading, setLoading] = useState(false);

    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    const [avatar, setAvatar] = useState(defaultUser);
    const [avatarFile, setAvatarFile] = useState(null);

    async function fetchUser() {
        try {
            
            const response = await api.get("/users");
            const userData = response.data.user;
            setUser(userData);
            setName(userData.name || '');
            setEmail(userData.email || '');

            if (userData.avatar) {
                setAvatar(`${api.defaults.baseURL}/files/${userData.avatar}`);
            }
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        return () => {
            if (avatar.startsWith("blob:")) {
                URL.revokeObjectURL(avatar);
            }
        };
    }, [avatar]);

    if (!user) {
        return <p>Carregando...</p>;
    }

    return (
        <Container>
            <header>
                <FiArrowLeft onClick={() => navigate(-1)} />
            </header>

            <form>
                <div className="image">
                    <img src={avatar} alt="imagem do usuário" />
                    <label htmlFor="img">
                        <FiCamera />
                    </label>
                    <input
                        type="file"
                        id="img"
                        accept="image/png, image/jpeg"
                        onChange={e => {
                            const file = e.target.files[0];
                            setAvatarFile(file);
                            const imagePreview = URL.createObjectURL(file);
                            setAvatar(imagePreview);
                        }}
                    />
                </div>
                <Input
                    icon={FiUser}
                    placeholder={name || "Nome"}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    icon={HiOutlineMail}
                    placeholder={email || "Email"}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    icon={FiLock}
                    placeholder="Senha atual"
                    type="password"
                    onChange={e => setOldPassword(e.target.value)}
                />
                <Input
                    icon={FiLock}
                    placeholder="Nova senha"
                    type="password"
                    onChange={e => setNewPassword(e.target.value)}
                />
                <Button
                    title="Salvar"
                    loading={Loading}
                    onclick={async (event) => {
                        event.preventDefault();
                        setLoading(true)
                        try {
                            await api.put("/users", { name, email, old_password: oldPassword, new_password: newPassword })
                           
                            alert("Dados do usuário atualizados com sucesso!")
                            if (avatarFile) {
                                const fileForm = new FormData();
                                fileForm.append("avatar", avatarFile);

                                await api.patch("/users/avatar", fileForm);
                            }
                        } catch (error) {
                            setLoading(false)
                            if (error.response) {
                                alert(error.response.data.message);
                            } else {
                                alert("Não foi possível atualizar os dados");
                            }
                        }
                        setLoading(false)
                    }}
                />
            </form>
        </Container>
    );
}
