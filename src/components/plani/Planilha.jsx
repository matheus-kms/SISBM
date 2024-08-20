import React from 'react';
import "./script"
import "./styles.css"

const PlanilhaPage = () => {
  return (
    <div>
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Planilha</a></li>
          <li><a href="#">Contrato</a></li>
        </ul>
      </div>

      <div className="content">
        <header>
          <h1>Planilha de Controle</h1>
          <p>Contrato: </p>
          <p>Objeto:</p>
          <p>Vigência: </p>
          <p>Empresa: </p>
          <p>Valor do Contrato:</p>
          <p>Data do Contrato:</p>
        </header>

        <table id="editableTable">
          <thead>
            <tr>
              <th>Item</th>
              <th>Fonte</th>
              <th>Código</th>
              <th>Descrição</th>
              <th>Unidade</th>
              <th>Quantidade</th>
              <th>Preço Unitário</th>
              <th>Preço Total S/BDI</th>
              <th>Preço Total C/BDI</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(30)].map((_, index) => (
              <tr key={index}>
                <td contentEditable="true"></td>
                <td contentEditable="true"></td>
                <td contentEditable="true"></td>
                <td contentEditable="true"></td>
                <td contentEditable="true"></td>
                <td contentEditable="true"></td>
                <td contentEditable="true"></td>
                <td contentEditable="true"></td>
                <td contentEditable="true"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlanilhaPage;

