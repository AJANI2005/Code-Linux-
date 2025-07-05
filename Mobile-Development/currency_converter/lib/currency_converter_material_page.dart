import 'package:flutter/material.dart';

class CurrencyConverterMaterialPage extends StatefulWidget {
  const CurrencyConverterMaterialPage({super.key});
  @override
  State createState() => _CurrencyConverterMaterialPageState();
}

class _CurrencyConverterMaterialPageState extends State<CurrencyConverterMaterialPage> {
  double result = 0;
  TextEditingController textEditingController = TextEditingController();

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final border = OutlineInputBorder(
      borderSide: BorderSide.none,
      borderRadius: BorderRadius.all(Radius.circular(10)),
    );

    return Scaffold(
      backgroundColor: Colors.green,
      appBar: AppBar(title: const Text('Currency Converter')),

      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                '\$' + result.toStringAsFixed(2) + ' BDS',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 55,
                  color: Colors.white,
                ),
              ),
              TextField(
                controller: textEditingController,
                decoration: InputDecoration(
                  filled: true,
                  fillColor: Colors.white,
                  hintText: "Enter the amount in USD",
                  prefixIcon: Icon(Icons.monetization_on_outlined),
                  focusedBorder: border,
                  enabledBorder: border,
                ),
                style: TextStyle(color: Colors.black),
                keyboardType: TextInputType.numberWithOptions(decimal: true),
              ),
              const SizedBox(height: 10),
              TextButton(
                onPressed: () {
                  setState(() {
                    result = int.parse(textEditingController.text) * 2.02;
                  });
                },
              
                style: TextButton.styleFrom(
                  backgroundColor: Colors.green.shade800,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(Radius.circular(10)),
                  ),
                  minimumSize: Size(double.infinity, 50),
                ),
              
                child: const Text(
                  'Convert',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
