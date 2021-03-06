package br.com.nottrello.model.entity;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table(name = "pergunta")
@Entity
public class Pergunta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pergunta_id")
	private Long id;
	
	private String titulo;
	private String detalhesPergunta;
	private Date data_criacao = new Date();
	
	@ManyToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;
	
	public Pergunta() {
		
	}

	public Pergunta(Long id, String titulo, String detalhesPergunta, Date data_criacao, Usuario usuario) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.detalhesPergunta = detalhesPergunta;
		this.data_criacao = data_criacao;
		this.usuario = usuario;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDetalhesPergunta() {
		return detalhesPergunta;
	}

	public void setDetalhesPergunta(String detalhesPergunta) {
		this.detalhesPergunta = detalhesPergunta;
	}
			
	public Date getData_criacao() {
		return data_criacao;
	}

	public void setData_criacao(Date data_criacao) {
		this.data_criacao = data_criacao;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}
